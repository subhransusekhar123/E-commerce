import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";

const store = configureStore({
  reducer: {
    cartStore: cartSlice
  }
});

export default store;
