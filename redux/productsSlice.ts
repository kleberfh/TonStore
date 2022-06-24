import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../services/products';
import { RootState, IProductState } from '../types';

const initialState: IProductState = {
  count: 0,
  products: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    return await getProducts();
  } catch (e) {
    return e.message;
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload.products;
        state.count += action.payload.count;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'error';
      });
  },
});

export const getAllProducts = (state: RootState) => state.products.products;
export const getProductsStatus = (state: RootState) => state.products.status;

export default productsSlice.reducer;
