import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    showItem(state, action) {
      state.item = action.payload;
    },
  },
});
export const { showItem } = productSlice.actions;
export default productSlice.reducer;
