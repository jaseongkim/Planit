import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

// Getting all categories & todos from server
export const getCategThunk = createAsyncThunk(
  "category/getCategory",
  async (payload, thunkAPI) => {
    try {
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
      const { data } = await apis.createTodo(payload);
      return thunkAPI.fulfillWithValue({
        todo: data.data,
        index: payload.addTodoObj,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Updating the added todo to server
export const updateTodoThunk = createAsyncThunk(
  "todo/updateTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.updateTodo(payload);
      return thunkAPI.fulfillWithValue({
        todo: data.data,
        index: payload.updateTodoObj,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Deleting the added todo to server
export const deleteTodoThunk = createAsyncThunk(
  "todo/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      console.log("deleteThunk payload", payload.todoId);
      const { data } = await apis.deleteTodo(payload.todoId);
      return thunkAPI.fulfillWithValue(payload);
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
      state.categories[action.payload.categIndex].todos.push(
        action.payload.categReq
      );
    },

    // onChnageTodo for the new added todo
    onChangeTodo: (state, action) => {
      state.categories[action.payload.categIndex].todos[
        action.payload.todoIndex
      ].title = action.payload.chgTodoTitle;
    },
  },
  extraReducers: {
    // Getting all the categories
    [getCategThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [getCategThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Replacing the submitted todo from server with the added todo
    [createTodoThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [createTodoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const categIndex = action.payload.index.categIndex;
      const todoIndex = action.payload.index.todoIndex;

      state.categories[categIndex].todos[todoIndex] = action.payload.todo;
    },
    [createTodoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Updating todo
    [updateTodoThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTodoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const categIndex = action.payload.index.categIndex;
      const todoIndex = action.payload.index.todoIndex;

      state.categories[categIndex].todos[todoIndex] = action.payload.todo;
    },
    [updateTodoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Deleting todo
    [deleteTodoThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      const categIndex = action.payload.categIndex;
      const todoIndex = action.payload.todoIndex;

    

      state.categories[categIndex].todos.splice(todoIndex,1)
    },
    [deleteTodoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addMtyTodo, onChangeTodo } = categTodoSlice.actions;
export default categTodoSlice.reducer;
