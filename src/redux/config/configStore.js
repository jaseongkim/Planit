import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";
import todoSlice from "../modules/todoSlice";
import categorySlice from "../modules/categorySlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    todo: todoSlice,
    category: categorySlice,
    membersSlice,
    followSlice,
  },
});

export default store;
