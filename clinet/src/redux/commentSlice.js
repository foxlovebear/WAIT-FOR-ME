import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//新增slice順序
// 1.新增切片，設定初值，取得資料(設定stusus)，新增方法(匯出方法)，
// 2.store的reducer放屬性進去(=slice的name)
// 3.最外部的index檔執行commentFetch

//給初值
const initialState = {
  data: [],
  status: [], //fetch資料時的狀態(success,padding,error)
};

//fetch data
export const commentFetch = createAsyncThunk(
  "comment/commentFetch",
  async () => {
    try {
      const rep = await axios.get("http://localhost:3001/comment");
      return rep.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [commentFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [commentFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [commentFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = commentSlice.actions;

export default commentSlice.reducer;
