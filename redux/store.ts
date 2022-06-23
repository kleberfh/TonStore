import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productsSlice,
});

export default configureStore({
  reducer: rootReducer,
});