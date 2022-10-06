import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const postTimer = createAsyncThunk(
  "postTimer",
  async (time, thunkAPI) => {

    try {
      const { data } = await apis.postTimer(time);

    } catch (e) {
        console.log(e)
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
