import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";
import categTodoSlice from "../modules/categTodoSlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    categTodoSlice,
    membersSlice,
    followSlice,
  },
});

export default store;
