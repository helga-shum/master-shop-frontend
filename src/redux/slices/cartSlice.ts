import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLocalStorage';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string[];
  brand: string;
  description: string;
  measures: { name: string; type: string }[];
  procent: number;
  category: number;
  count: number;
};
interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
const { items, totalPrice } = getCartFromLS();
const initialState: CartSliceState = {
  items: items,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id == action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});
export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
