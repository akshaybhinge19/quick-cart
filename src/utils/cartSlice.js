import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartItems: cartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // if Item exists, increase quantity
        state.cartItems[itemIndex].quantity += 1;
      } else {
        // if Item doesn't exist, add new item with quantity 1
        const newItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity = quantity;
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.cartItems.splice(itemIndex, 1);
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;