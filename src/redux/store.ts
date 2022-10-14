import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';

import itemSlice from './slices/itemSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,

    itemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
