import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { ConsoleView } from "react-device-detect";
import { apis } from "../../shared/api";

// Getting all categories & todos from server
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

// Posting the added todo to server
export const createTodoThunk = createAsyncThunk(
  "todo/createTodo",
  async (payload, thunkAPI) => {
    try {
      // console.log("createTodoThunk payload", payload)
      // console.log("createtodoThunk paylaod value", payload.addTodoObj.categIndex)
      const {data} = await apis.createTodo(payload);
      return thunkAPI.fulfillWithValue({todo:data.data, index:payload.addTodoObj}); 
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };    
  
  const categTodoSlice = createSlice({
    name: "category",
    initialState,
    reducers: {

      // adding empty todo when the btn get clicked
      addMtyTodo: (state, action) => {
        state.categories[action.payload.categIndex].todos.push(action.payload.categReq)
      },

      // onChnageTodo for the new added todo
      onChangeTodo: (state, action) => {
        state.categories[action.payload.categIndex].todos[action.payload.todoIndex].title = action.payload.chgTodoTitle
      },
    },
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

      // Replacing the submitted todo from server with the added todo 
      [createTodoThunk.pending]: (state) => {
        state.isLoading = true;
      },
      [createTodoThunk.fulfilled]: (state, action) => {
        state.isLoading = false

        const categIndex = action.payload.index.categIndex
        const todoIndex = action.payload.index.todoIndex
      
        state.categories[categIndex].todos[todoIndex] = action.payload.todo
      },
      [createTodoThunk.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload;
      },
    },
  })
  
  export const { addMtyTodo, onChangeTodo} = categTodoSlice.actions;
  export default categTodoSlice.reducer;