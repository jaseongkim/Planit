import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const toSlice = createSlice({
  name: "todoo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const addtodo = state.todo.filter(
        (todo) => todo.categoryId === action.payload.categoryId
      );

      if (addtodo.length === 0) {
        state.todo.push(action.payload);
      } else {
        const list = [];
        state.todo.map((todo) => {
          if (todo.categoryId === action.payload.categoryId) {
            list.push(todo);
          }
          return 0;
        });
        let idSet = list[list.length - 1];
        action.payload.todoId = idSet.todoId + 1;
        state.todo.push(action.payload);
      } // End of else
    }, //  End of addTodo
  },
  extraReducers: {},
});

export const { addTodo } = toSlice.actions;
export default toSlice.reducer;
