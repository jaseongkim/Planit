import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";

// Getting all planets for WklyyTodo from the server
export const getWeekPlanetsThunk = createAsyncThunk(
  "getWeekPlanetsThunk",
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
  "getDayPlanetsThunk",
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
  "createPlanetThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.postPlanet(payload);;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// Updating planet from the edit mode
export const updatePlanetThunk = createAsyncThunk(
  "updatePlanetThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.updatePlanet(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
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

   // posting today's planet type to server
    [createPlanetThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [createPlanetThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.planet.dueDate = action.payload.dueDate;
      state.planet.planetType = action.payload.planetType;

    },
    [createPlanetThunk.rejected]: (state, action) => {
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

    // Updating planet from the edit mode
    [updatePlanetThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePlanetThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const planetIndex = state.planets.planets.findIndex(
        (planet) => planet.dueDate === action.payload.dueDate
      );

      state.planets.planets[planetIndex].planetSize = action.payload.planetSize;

      state.planets.planets[planetIndex].planetColor =
        action.payload.planetColor;
    },
    [updatePlanetThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default followSlice.reducer;
