import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statistic: [],
};

export const getChartDataDay = createAsyncThunk(
  "getChartDataDay",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("https://teamsparta.link/statistic", {
        params: {
          date: payload,
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getChartDataWeek = createAsyncThunk(
  "getChartDataWeek",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://teamsparta.link/statistic/week",
        {
          params: {
            startDate: payload,
          },
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getChartDataMonth = createAsyncThunk(
  "getChartDataMonth",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://teamsparta.link/statistic/month",
        {
          params: {
            startDate: payload,
          },
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getChartDataYear = createAsyncThunk(
  "getChartDataYear",
  async (payload, thunkAPI) => {
    console.log("payload", payload)
    try {
      const response = await axios.get(
        "https://teamsparta.link/statistic/year",
        {
          params: {
            startDate: payload,
          },
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  extraReducers: {
    [getChartDataDay.fulfilled]: (state, action) => {
      state.statistic = action.payload;
    },
    [getChartDataWeek.fulfilled]: (state, action) => {
      state.statistic = action.payload;
    },
    [getChartDataMonth.fulfilled]: (state, action) => {
      state.statistic = action.payload;
    },
    [getChartDataYear.fulfilled]: (state, action) => {
      state.statistic = action.payload;
    },
  },
});

export default statisticSlice.reducer;
