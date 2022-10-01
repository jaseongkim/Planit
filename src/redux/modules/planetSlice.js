import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";

// Getting all planets for WklyyTodo from the server
export const getWeekPlanetsThunk = createAsyncThunk(
  "planet/getWeekPlanetsThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.getWeekPlanets(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// Getting a planet for DlyTodo from the server
export const getDayPlanetThunk = createAsyncThunk(
  "planet/getDayPlanetsThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.getDayPlanet(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// posting today's planet type to server
export const createPlanetThunk = createAsyncThunk(
  "planet/createPlanetThunk",
  async (payload, thunkAPI) => {
    try {
      console.log("Checking payload", payload);
      const { data } = await apis.postPlanet(payload);
      // return thunkAPI.fulfillWithValue(data.data);
      console.log(data.data);
      // window.location.replace("/dlytodo");
    } catch (e) {
      // return thunkAPI.rejectWithValue(e.code);
      console.log(e);
    }
  }
);

export const updatePlanetThunk = createAsyncThunk(
  "planet/updatePlanetThunk",
  async (payload, thunkAPI) => {
    try {
      console.log("Checking payload", payload);
      const { data } = await apis.updatePlanet(payload).then((response) => {
        if (response.data.success === false) {
        } else {
          window.location.replace("/wklytodo");
        }
      });
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      // return thunkAPI.rejectWithValue(e.code);
      // console.log(e);
    }
  }
);

const initialState = {
  planets: [],
  planet: [],
  isLoading: false,
  error: null,
};

const followSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
  extraReducers: {
    // Getting all the seven days Planets
    [getWeekPlanetsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getWeekPlanetsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planets = action.payload;
    },
    [getWeekPlanetsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Getting one day Planet
    [getDayPlanetThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getDayPlanetThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planet = action.payload;
    },
    [getDayPlanetThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { } = followSlice.actions;
export default followSlice.reducer;
