import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//新增slice順序
// 1.新增切片，設定初值，取得資料(設定stusus)，新增方法(匯出方法)，
// 2.store的reducer放屬性進去(=slice的name)
// 3.最外部的index檔執行storetFetch

//本slice掌管數據
//data:axios 從資料庫
//data2:P1篩選後的資料
//newData:P2的List會用newData呈現資料
//tagArray:篩選器形成陣列

//縣市＆類型篩選會把newData存到localhost，目的是重整到P2時台北還是台北
//P3點標籤到P2也會存到localhost

const initialState = {
  status: null, //for axios
  data: [], //第一次篩選，任意畫面標籤篩選
  data2: JSON.parse(localStorage.getItem("newData")), //filterCity，filterType
  newData: JSON.parse(localStorage.getItem("newData")) //P2的List會用newData呈現資料
    ? JSON.parse(localStorage.getItem("newData"))
    : [],
  tagArray: [],
  // now:
  // new Date().toString().substr(16, 2) + new Date().toString().substr(19, 2), //目前時間不會隨著元件改變而更新(除非重新整理)
  now: "1230", //大專demo錄製影片用
  cost: "",
  time: "",
};
//fetch data
export const storesFetch = createAsyncThunk("stores/storesFetch", async () => {
  try {
    const rep = await axios.get("http://localhost:3001/");
    return rep.data;
  } catch (error) {
    console.log(error);
  }
});

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    now: (state, action) => {
      //P2讀取時會每秒跳一次更新現在時間
      state.now = new Date().toString().substr(16, 2) + new Date().toString().substr(19, 2); //目前時間不會隨著元件改變而更新(除非重新整理)
    },
    costF: (state, action) => {
      //<Tag>金額條
      state.cost = action.payload;
    },
    timeF: (state, action) => {
      //<Tag>前往時段
      state.time = action.payload;
    },

    filterCity: (state, action) => {
      state.tagArray = []; //每次從Ｐ1進Ｐ2會清tagArray
      state.newData = state.data.filter((v) => v.city === action.payload);
      state.data2 = state.data.filter((v) => v.city === action.payload);
      localStorage.setItem("newData", JSON.stringify(state.newData));
    },
    filterType: (state, action) => {
      state.tagArray = [];
      state.newData = state.data.filter((v) => v.foodtype === action.payload);
      state.data2 = state.data.filter((v) => v.foodtype === action.payload);
      localStorage.setItem("newData", JSON.stringify(state.newData));
    },
    //從第三頁選去標籤時，不需要複數篩選
    filterAllFromTag: (state, action) => {
      state.newData = state.data.filter((v) => {
        return v.tag1 === action.payload || v.tag2 === action.payload || v.tag3 === action.payload;
      });
      localStorage.setItem("newData", JSON.stringify(state.newData));
    },
    //11/7 filterTag目前有BUG(高雄->寵物友善->無低消)(高雄->有wifi->無服務費)(解決)
    filterTag: (state, action) => {
      if (state.tagArray.includes(action.payload)) {
        if (action.payload != "消費金額" && action.payload != "前往時段") {
          state.tagArray = state.tagArray.filter((v) => v != action.payload);
        }
        //有包含就扣掉
      } else {
        switch (action.payload) {
          case "營業中":
            state.tagArray = state.tagArray.filter((v) => v != "前往時段");
            state.tagArray.push(action.payload);

            break;
          case "前往時段":
            state.tagArray = state.tagArray.filter((v) => v != "營業中");
            state.tagArray.push(action.payload);

            break;
          case "消費金額":
            state.tagArray = state.tagArray.filter((v) => v != "平價美食" && v != "中等消費" && v != "高級餐廳");
            state.tagArray.push(action.payload);

            break;
          case "平價美食":
            state.tagArray = state.tagArray.filter((v) => v != "消費金額" && v != "中等消費" && v != "高級餐廳");
            state.tagArray.push(action.payload);

            break;
          case "中等消費":
            state.tagArray = state.tagArray.filter((v) => v != "平價美食" && v != "消費金額" && v != "高級餐廳");
            state.tagArray.push(action.payload);

            break;
          case "高級餐廳":
            state.tagArray = state.tagArray.filter((v) => v != "平價美食" && v != "中等消費" && v != "消費金額");
            state.tagArray.push(action.payload);

            break;

          default:
            state.tagArray.push(action.payload);
            break;
          //沒包含就新增
        }
      }
      //第一次拿tempA[0]篩選(data2)
      //第二次tempA[1](tempA[0]filter回傳的新陣列.push變成陣列的第一項(也是陣列))
      //tempB為暫時的結果陣列，到最後一次迴圈即為目標陣列，放進newData
      let tempA = [state.data2]; //tempA = [data2,第1次篩選結果,第2次篩選結果...]
      for (let i = 0; i < state.tagArray.length; i++) {
        switch (state.tagArray[i]) {
          case "營業中":
            state.time = "";
            let tempB0 = tempA[i].filter((v) => {
              const f = v.time1;
              const f1 = f.substr(0, 2) + f.substr(3, 2);
              const f2 = f.substr(6, 2) + f.substr(9, 2);
              const s = v.time2;
              const s1 = s.substr(0, 2) + s.substr(3, 2);
              const s2 = s.substr(6, 2) + s.substr(9, 2);
              return (state.now > f1 && state.now < f2) || (state.now > s1 && state.now < s2);
            });
            tempA.push(tempB0);
            state.newData = tempB0;
            break;
          case "前往時段":
            let timeTemp = state.time.substr(0, 2) + state.time.substr(3, 2);
            let tempB1 = tempA[i].filter((v) => {
              const f = v.time1;
              const f1 = f.substr(0, 2) + f.substr(3, 2);
              const f2 = f.substr(6, 2) + f.substr(9, 2);
              const s = v.time2;
              const s1 = s.substr(0, 2) + s.substr(3, 2);
              const s2 = s.substr(6, 2) + s.substr(9, 2);
              return (timeTemp > f1 && timeTemp < f2) || (timeTemp > s1 && timeTemp < s2);
            });
            tempA.push(tempB1);
            state.newData = tempB1;
            break;
          case "消費金額":
            let tempC0 = tempA[i].filter((v) => {
              return v.cost <= parseInt(state.cost);
            });
            tempA.push(tempC0);
            state.newData = tempC0;
            break;
          case "平價美食":
            state.cost = "";
            let tempC1 = tempA[i].filter((v) => {
              return v.cost <= 200;
            });
            tempA.push(tempC1);
            state.newData = tempC1;
            break;
          case "中等消費":
            state.cost = "";
            let tempC2 = tempA[i].filter((v) => {
              return 200 < v.cost && v.cost < 1000;
            });
            tempA.push(tempC2);
            state.newData = tempC2;
            break;
          case "高級餐廳":
            state.cost = "";
            let tempC3 = tempA[i].filter((v) => {
              return v.cost >= 1000;
            });
            tempA.push(tempC3);
            state.newData = tempC3;
            break;
          default:
            let tempD = tempA[i].filter((v) => {
              return (
                v.tag1 === state.tagArray[i] || v.tag2 === state.tagArray[i] || v.tag3 === state.tagArray[i] //tag1,2,3有沒有其中一個===
              );
            });
            tempA.push(tempD);
            state.newData = tempD;
            break;
        }
      }
      if (state.tagArray.length == 0) {
        state.newData = state.data2;
      } //如果tagArray.length==0，直接設為localdata
      //11.7新增這行，因為為0 for迴圈不會執行
    },
    tagClean: (state, action) => {
      //目前沒用到(可清空標籤)
      state.tagArray = [];
      state.newData = state.data2;
    },
    search: (state, action) => {
      state.newData = state.data.filter((v) => {
        return (
          v.name?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.city?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.foodtype?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag1?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag2?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag3?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.article?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.comment?.toLowerCase().includes(action.payload.toLowerCase())
          // v.comment?(有沒有值如果沒值 這段就null)
        );
      });
      localStorage.setItem("newData", JSON.stringify(state.newData));
      state.data2 = state.newData;
    },
    //在第二頁重新整理<Page2>，清空tagArray newData=local
    load: (state, action) => {
      state.tagArray = [];
      state.newData = state.data2;
    },
  },
  extraReducers: {
    [storesFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [storesFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      // state.newData = action.payload; //11.6重新fetch(目前回首頁newS會抓全部值)
    },
    [storesFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterCity, filterType, filterTag, tagClean, search, load, filterAllFromTag, now, costF, timeF } = storesSlice.actions;

export default storesSlice.reducer;
