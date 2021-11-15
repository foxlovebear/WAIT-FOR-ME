import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//給初值
const initialState = {
  data: [],
  status: [], //fetch資料時的狀態(success,padding,error)
  newData: [],
};

//fetch data
export const dataFetch = createAsyncThunk("data/dataFetch", async () => {
  try {
    const rep = await axios.get("http://localhost:3001/data");
    return rep.data;
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    search: (state, action) => {
      state.newData = state.data.filter((v) => {
        if (!action.payload) {
          return v;
        }
        return (
          v.name?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.city?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.foodtype?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag1?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag2?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag3?.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
      localStorage.setItem("newData", JSON.stringify(state.newData));
    },
  },
  extraReducers: {
    [dataFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [dataFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.newData = action.payload;
      state.status = "success";
    },
    [dataFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { search } = dataSlice.actions;

export default dataSlice.reducer;
