import {RootState, TCartState} from "../types";
import { createSlice } from '@reduxjs/toolkit';

const initialState: TCartState = {
  count: 0,
  products: [],
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.count += 1;
      state.value += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
      state.count -= 1;
      state.value -= action.payload.price;
    },
    clearProducts: state => {
      state.products = [];
      state.count = 0;
    }
  },
});

export const getCartValue = (state: RootState) => state.cart.value;
export const getCartCount = (state: RootState) => state.cart.count;
export const getCartProducts = (state: RootState) => state.cart.products;

export const {addProduct, removeProduct, clearProducts} = cartSlice.actions;

export default cartSlice.reducer;