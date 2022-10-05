import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

// Getting a report from the server
export const getReportThunk = createAsyncThunk(
  "report/getReportThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.getReport(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  report: [],
  isLoading: false,
  error: null,
};

const reportSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
  extraReducers: {

    // Getting a report from the server
    [getReportThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getReportThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.report = action.payload;
    },
    [getReportThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

// export const { } = followSlice.actions;
export default reportSlice.reducer;
