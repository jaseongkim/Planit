import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const postTimer = createAsyncThunk(
  "postTimer",
  async (time, thunkAPI) => {
    console.log(time);
    try {
      const { data } = await apis.postTimer(time);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      // return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  isRunning: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setRunning: (state, action) => {
      state.isRunning = action.payload;
    },
  },
  extraReducers: {
    [postTimer.fulfilled]: () => {},
    [postTimer.rejected]: () => {},
    [postTimer.pending]: () => {},
  },
});

export const { setRunning } = timerSlice.actions;
export default timerSlice.reducer;
