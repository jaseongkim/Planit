import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const postTimer = createAsyncThunk(
  "postTimer",
  async (time, thunkAPI) => {
    console.log(time);
    try {
      // const { data } = await apis.postTimer(time);
      // console.log(data);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      // return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {},
  extraReducers: {
    [postTimer.fulfilled]: (state, action) => {
      state.follower = action.payload;
    },
    [postTimer.rejected]: () => {},
    [postTimer.pending]: () => {},
  },
});

// export const { } = followSlice.actions;
export default timerSlice.reducer;
