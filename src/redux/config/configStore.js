import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";
import categTodoSlice from "../modules/categTodoSlice";
import cateSlice from "../modules/cateSlice";
import toSlice from "../modules/toSlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    categTodoSlice,
    membersSlice,
    followSlice,
    cateSlice,
    toSlice,
  },
});

export default store;
