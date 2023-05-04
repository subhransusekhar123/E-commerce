import { createSlice } from "@reduxjs/toolkit";
import getProduct from "./thunk";

const initialState = {
  product: [],
  cart: [], 
  thunkSituation: "idle"
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    remove(state, action) {
      state.cart = state.cart.filter((ele) => {
        return ele.id !== action.payload;
      });
    }
  },
  extraReducers:(build) => {
    build.addCase(getProduct.pending, (state, action)=> {
      state.thunkSituation = "loading"
    })
    build.addCase(getProduct.fulfilled, (state, action)=> {
      state.thunkSituation = "idle"
      state.product = action.payload
    })
    build.addCase(getProduct.rejected)
  }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
