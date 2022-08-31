import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../modules/memberSlice";

const store = configureStore({
  reducer: {
    memberSlice
  },
});

export default store;
