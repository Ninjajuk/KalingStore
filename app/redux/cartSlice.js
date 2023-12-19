
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// Load cart from local storage or use an empty array as the initial state
// let initialState;
// if (typeof window !== 'undefined') {
//   initialState = JSON.parse(localStorage.getItem("cart")) || [];
// }

// const saveCartToLocalStorage = (cart) => {
//   localStorage.setItem("cart", JSON.stringify(cart) || []);
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, title, price, thumbnail, discountPercentage, brand } =
        action.payload;
        const newState = [...state];

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
          quantity: 1,
        });
      }
      // saveCartToLocalStorage(state);
    },
    removeItem(state, action) {
      // return state.filter((item) => item.id !== action.payload);
      const newState = state.filter((item) => item.id !== action.payload);
      // saveCartToLocalStorage(newState);
      return newState;
    },
    increaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        // saveCartToLocalStorage(state);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // saveCartToLocalStorage(state);
      }
    },

    // // Code for resetting the cart)
    clearCart: (state) => {
      const newState = [];
      // localStorage.removeItem("cart");
      return newState;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
