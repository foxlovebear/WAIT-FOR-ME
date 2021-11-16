// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// //本slice掌管數據
// //data:axios 從資料庫
// //newData:初值從localData，city&foodtype 篩選器會直接改變，並存入localData
// //tagArray:篩選器形成陣列
// const initialState = {
//   status: null, //for axios
//   data: [], //第一次篩選，任意畫面標籤篩選
//   data2: JSON.parse(localStorage.getItem("newData")), //filterCity，filterType
//   newData: JSON.parse(localStorage.getItem("newData")) //呈現給list(11/11看看初值能不能不用)
//     ? JSON.parse(localStorage.getItem("newData"))
//     : [],
//   tagArray: [],
//   now:
//     new Date().toString().substr(16, 2) + new Date().toString().substr(19, 2), //目前時間不會隨著元件改變而更新(除非重新整理)
//   // now: "2130", //測試用，高雄->營業中->剩梅塔
// };
// //fetch data
// export const storesFetch = createAsyncThunk("stores/storesFetch", async () => {
//   try {
//     const rep = await axios.get("http://localhost:3001/");
//     return rep.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// // export const storesFetch = createAsyncThunk("stores/storesFetch", async () => {
// //   const rep = await axios.get("http://localhost:3001/");
// //   return rep?.data; //如果rep是null，return null，不然就是rep裏面的data(取代if語句)
// // });

// const storesSlice = createSlice({
//   name: "stores",
//   initialState,
//   reducers: {
//     filterCity: (state, action) => {
//       state.tagArray = [];
//       if (action.payload == "") {
//         state.newData = state.data;
//         state.data2 = state.data;
//       } else {
//         state.newData = state.data.filter((v) => v.city === action.payload);
//         state.data2 = state.data.filter((v) => v.city === action.payload);
//       }
//       // 清除測試完復原state.data = data.filter((v) => v.city === action.payload);
//       localStorage.setItem("newData", JSON.stringify(state.newData));
//     },
//     filterType: (state, action) => {
//       state.tagArray = [];
//       state.newData = state.data.filter((v) => v.foodtype === action.payload);
//       state.data2 = state.data.filter((v) => v.foodtype === action.payload);
//       localStorage.setItem("newData", JSON.stringify(state.newData));
//     },
//     //從第三頁選去標籤時，不需要複數篩選
//     filterAllFromTag: (state, action) => {
//       state.newData = state.data.filter((v) => {
//         return (
//           v.tag1 === action.payload ||
//           v.tag2 === action.payload ||
//           v.tag3 === action.payload
//         );
//       });
//       localStorage.setItem("newData", JSON.stringify(state.newData));
//     },
//     //11/7 filterTag目前有BUG(高雄->寵物友善->無低消)(高雄->有wifi->無服務費)(解決)
//     filterTag: (state, action) => {
//       if (state.tagArray.includes(action.payload)) {
//         state.tagArray = state.tagArray.filter((v) => v != action.payload);
//         //有包含就扣掉
//       } else {
//         state.tagArray.push(action.payload);
//         //沒包含就新增
//       }
//       //第一次拿tempA[0]篩選(data2)
//       //第二次tempA[1](tempA[0]filter回傳的新陣列.push變成陣列的第一項(也是陣列))
//       //tempB為暫時的結果陣列，到最後一次迴圈即為目標陣列，放進newData

//       let tempA = [state.data2]; //tempA = [data2,第1次篩選結果,第2次篩選結果...]
//       for (let i = 0; i < state.tagArray.length; i++) {
//         if (state.tagArray[i] == "營業中") {
//           let tempB = tempA[i].filter((v) => {
//             const f = v.time1;
//            const f1 = f.substr(0, 2) + f.substr(3, 2);
// const f2 = f.substr(6, 2) + f.substr(9, 2);
// const s = v.time2;
// const s1 = s.substr(0, 2) + s.substr(3, 2);
// const s2 = s.substr(6, 2) + s.substr(9, 2);
//             return (
//               (state.now > f1 && state.now < f2) ||
//               (state.now > s1 && state.now < s2)
//             );
//           });
//           tempA.push(tempB);
//           state.newData = tempB;
//         } else {
//           let tempB = tempA[i].filter((v) => {
//             return (
//               v.tag1 === state.tagArray[i] ||
//               v.tag2 === state.tagArray[i] ||
//               v.tag3 === state.tagArray[i] //tag1,2,3有沒有其中一個===
//             );
//           });
//           tempA.push(tempB);
//           state.newData = tempB;
//         }
//       }
//       if (state.tagArray.length == 0) {
//         state.newData = state.data2;
//       } //如果tagArray.length==0，直接設為localdata
//       //11.7新增這行，因為為0 for迴圈不會執行
//     },
//     tagClean: (state, action) => {
//       state.tagArray = [];
//       state.newData = state.data2;
//     },
//     search: (state, action) => {
//       state.newData = state.data.filter((v) => {
//         return (
//           v.name?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.city?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.foodtype?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.tag1?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.tag2?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.tag3?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.article?.toLowerCase().includes(action.payload.toLowerCase()) ||
//           v.comment?.toLowerCase().includes(action.payload.toLowerCase())
//           // v.comment?(有沒有值如果沒值 這段就null)
//         );
//       });
//       localStorage.setItem("newData", JSON.stringify(state.newData));
//     },
//     //在第二頁重新整理<Page2>，清空tagArray newData=local
//     load: (state, action) => {
//       state.tagArray = [];
//       state.newData = state.data2;
//     },
//   },
//   extraReducers: {
//     [storesFetch.padding]: (state, action) => {
//       state.status = "padding";
//     },
//     [storesFetch.fulfilled]: (state, action) => {
//       state.data = action.payload;
//       state.status = "success";
//       // state.newData = action.payload; //11.6重新fetch(目前回首頁newS會抓全部值)
//     },
//     [storesFetch.rejected]: (state, action) => {
//       state.status = "rejected";
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   filterCity,
//   filterType,
//   filterTag,
//   tagClean,
//   search,
//   load,
//   filterAllFromTag,
// } = storesSlice.actions;

// export default storesSlice.reducer;

// =================================
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//本slice掌管數據
//data:axios 從資料庫
//newData:初值從localData，city&foodtype 篩選器會直接改變，並存入localData
//tagArray:篩選器形成陣列

const initialState = {
  status: null, //for axios
  data: [], //第一次篩選，任意畫面標籤篩選
  data2: JSON.parse(localStorage.getItem("newData")), //filterCity，filterType
  newData: JSON.parse(localStorage.getItem("newData")) //呈現給list(11/11看看初值能不能不用)
    ? JSON.parse(localStorage.getItem("newData"))
    : [],
  tagArray: [],
  // now:
  // new Date().toString().substr(16, 2) + new Date().toString().substr(19, 2), //目前時間不會隨著元件改變而更新(除非重新整理)
  now: "1230", //測試用
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
// export const storesFetch = createAsyncThunk("stores/storesFetch", async () => {
//   const rep = await axios.get("http://localhost:3001/");
//   return rep?.data; //如果rep是null，return null，不然就是rep裏面的data(取代if語句)
// });

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    filterCity: (state, action) => {
      state.tagArray = [];

      if (action.payload == "") {
        state.newData = state.data;
        state.data2 = state.data;
      } else {
        state.newData = state.data.filter((v) => v.city === action.payload);
        state.data2 = state.data.filter((v) => v.city === action.payload);
      }
      // 清除測試完復原state.data = data.filter((v) => v.city === action.payload);
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
        return (
          v.tag1 === action.payload ||
          v.tag2 === action.payload ||
          v.tag3 === action.payload
        );
      });
      localStorage.setItem("newData", JSON.stringify(state.newData));
    },
    //11/7 filterTag目前有BUG(高雄->寵物友善->無低消)(高雄->有wifi->無服務費)(解決)
    filterTag: (state, action) => {
      if (state.tagArray.includes(action.payload)) {
        state.tagArray = state.tagArray.filter((v) => v != action.payload);

        //有包含就扣掉
      } else {
        switch (action.payload) {
          case "平價美食":
            state.tagArray = state.tagArray.filter(
              (v) => v != "中等消費" && v != "高級餐廳"
            );
            state.tagArray.push(action.payload);

            break;
          case "中等消費":
            state.tagArray = state.tagArray.filter(
              (v) => v != "平價美食" && v != "高級餐廳"
            );
            state.tagArray.push(action.payload);

            break;
          case "高級餐廳":
            state.tagArray = state.tagArray.filter(
              (v) => v != "中等消費" && v != "平價美食"
            );
            state.tagArray.push(action.payload);

            break;

          default:
            state.tagArray.push(action.payload);
            break;
        }
        state.tagArray.push(action.payload);
        //沒包含就新增
      }
      //第一次拿tempA[0]篩選(data2)
      //第二次tempA[1](tempA[0]filter回傳的新陣列.push變成陣列的第一項(也是陣列))
      //tempB為暫時的結果陣列，到最後一次迴圈即為目標陣列，放進newData
      console.log(state.data2);
      let tempA = [state.data2]; //tempA = [data2,第1次篩選結果,第2次篩選結果...]
      for (let i = 0; i < state.tagArray.length; i++) {
        switch (state.tagArray[i]) {
          case "營業中":
            let tempB = tempA[i].filter((v) => {
              const f = v.time1;
              const f1 = f.substr(0, 2) + f.substr(3, 2);
              const f2 = f.substr(6, 2) + f.substr(9, 2);
              const s = v.time2;
              const s1 = s.substr(0, 2) + s.substr(3, 2);
              const s2 = s.substr(6, 2) + s.substr(9, 2);
              return (
                (state.now > f1 && state.now < f2) ||
                (state.now > s1 && state.now < s2)
              );
            });
            tempA.push(tempB);
            state.newData = tempB;
            break;
          case "平價美食":
            let tempC1 = tempA[i].filter((v) => {
              return v.cost <= 200;
            });
            tempA.push(tempC1);
            state.newData = tempC1;
            break;
          case "中等消費":
            let tempC2 = tempA[i].filter((v) => {
              return 200 < v.cost && v.cost <= 1000;
            });
            tempA.push(tempC2);
            state.newData = tempC2;
            break;
          case "高級餐廳":
            let tempC3 = tempA[i].filter((v) => {
              return v.cost > 1000;
            });
            tempA.push(tempC3);
            state.newData = tempC3;
            break;
          default:
            let tempD = tempA[i].filter((v) => {
              return (
                v.tag1 === state.tagArray[i] ||
                v.tag2 === state.tagArray[i] ||
                v.tag3 === state.tagArray[i] //tag1,2,3有沒有其中一個===
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
export const {
  filterCity,
  filterType,
  filterTag,
  tagClean,
  search,
  load,
  filterAllFromTag,
} = storesSlice.actions;

export default storesSlice.reducer;
