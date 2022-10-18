import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import { authReducer } from './slices/authSlice';
import { commentsReducer } from './slices/commentSlice';
import itemSlice from './slices/itemSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    authReducer,
    itemSlice,
    commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
