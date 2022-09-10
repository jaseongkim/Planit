import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";
import todoSlice from "../modules/todoSlice";
import categorySlice from "../modules/categorySlice";
import cateSlice from "../modules/cateSlice";
import toSlice from "../modules/toSlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    todo: todoSlice,
    category: categorySlice,
    membersSlice,
    followSlice,
    cateSlice,
    toSlice,
  },
});

export default store;
