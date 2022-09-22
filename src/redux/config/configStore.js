import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";
import categTodoSlice from "../modules/categTodoSlice";
import planetSlice from "../modules/planetSlice";

const store = configureStore({
  reducer: {
    member: memberSlice,
    planetSlice,
    categTodoSlice,
    membersSlice,
    followSlice,
  },
});

export default store;
