import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cate: [],
};

const cateSlice = createSlice({
  name: "cate",
  initialState,
  reducers: {
    addCate: (state, action) => {
      console.log("Check state", state)
      state.cate.push(action.payload);
    },
  },
  extraReducers: {},
});

export const { addCate } = cateSlice.actions;
export default cateSlice.reducer;
