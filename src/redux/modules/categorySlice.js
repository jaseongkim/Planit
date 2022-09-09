import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const getCategThunk = createAsyncThunk(
    "category/getCategory",
    async (payload, thunkAPI) => {
      try {
        // console.log("Checking payload", payload)
        const { data } = await apis.getCategories(payload);
        return thunkAPI.fulfillWithValue(data.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );

  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };    
  
  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {

      // Getting all the categories
      [getCategThunk.pending]: (state) => {
        state.isLoading = true;
      },
      [getCategThunk.fulfilled]: (state, action) => {
        state.isLoading = false
        state.categories = action.payload;
      },
      [getCategThunk.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload;
      },
    },
  })
  
  export default categorySlice.reducer;