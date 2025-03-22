import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action) => { // ✅ Added increaseQty
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decreaseQty: (state, action) => { // ✅ Added decreaseQty
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
    }
  }
});

export const { addToCart, increaseQty, decreaseQty } = cartSlice.actions; // ✅ Export increaseQty
export default cartSlice.reducer;
