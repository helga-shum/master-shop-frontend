import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});
export const {} = productSlice.actions;
export default productSlice.reducer;
