import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

// Creating Todo Thunk
export const createTodoThunk = createAsyncThunk(
    "todo/createTodo",
    async (payload, thunkAPI) => {
      try {
        console.log("createTodoThunk payload", payload)
        const data = await apis.createTodo(payload);
        return thunkAPI.fulfillWithValue(data.data); 
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

const initialState = {
  memberlist: [],
  member: {},
};

const todoSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {

  [createTodoThunk.pending]: (state) => {
    state.isLoading = true; 
  },
  [createTodoThunk.fulfilled]: (state, action) => {
    console.log(action.payload);
  },
  [createTodoThunk.rejected]: (state, action) => {
    state.isLoading = false; 
    state.error = action.payload; 
  },
  },
});

// export const { } = memberSlice.actions;
export default todoSlice.reducer;
