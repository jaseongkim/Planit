import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";
import todoSlice from "../modules/todoSlice";
import categorySlice from "../modules/categorySlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    todo: todoSlice,
    category: categorySlice
  },
});

export default store;
