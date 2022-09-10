import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    productSlice,
  },
});
