

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem(state, action) {
      const {
        id,
        title,
        price,
        thumbnail,
        discountPercentage,
        brand
      } = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.push({
          id,
          title,
          price,
          thumbnail,
          discountPercentage,
          brand,
          quantity: 1
        });
      }
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
