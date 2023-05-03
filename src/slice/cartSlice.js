import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: []
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
  }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
