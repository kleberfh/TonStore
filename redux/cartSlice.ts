import { createSlice } from '@reduxjs/toolkit';
import { RootState, ICartState } from '../types';

const initialState: ICartState = {
  count: 0,
  products: [],
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const alreadyInCart = state.products.find(
        product => product.id === action.payload.id,
      );
      if (alreadyInCart) {
        state.products.map(product => {
          if (product.id === action.payload.id) {
            product.count += 1;
          }
          return product;
        });
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
      state.count += 1;
      state.value += action.payload.price;
    },
    removeProduct: (state, action) => {
      if (action.payload.count > 1) {
        state.products = state.products.map(product => {
          if (product.id === action.payload.id) {
            product.count -= 1;
          }
          return product;
        });
      } else {
        state.products = state.products.filter(
          product => product.id !== action.payload.id,
        );
      }
      state.count -= 1;
      state.value -= action.payload.price;
    },
    clearCart: state => {
      state.count = 0;
      state.value = 0;
      state.products = [];
    },
  },
});

export const getCartValue = (state: RootState) => state.cart.value;
export const getCartCount = (state: RootState) => state.cart.count;
export const getCartProducts = (state: RootState) => state.cart.products;

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
