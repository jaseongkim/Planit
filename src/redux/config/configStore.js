import { configureStore } from "@reduxjs/toolkit";
import followSlice from "../modules/followSlice";
import memberSlice from "../modules/memberSlice";
import membersSlice from "../modules/membersSlice";

const store = configureStore({
  reducer: {
    memberSlice,
    membersSlice,
    followSlice,
  },
});

export default store;
