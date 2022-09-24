import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Sort } from './filterSlice';
type Params = {
  sortType: Sort;
  categoryId: number;
  currentPage: number;
  search: string;
};
export const fetchItems = createAsyncThunk('item/fetchItemsStatus', async (params: Params) => {
  const { sortType, categoryId, currentPage, search } = params;
  const { data } = await axios.get<Item[]>(
    `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&search=${search}&sortBy=${sortType.sort}&order=desc&page=${currentPage}&limit=3`,
  );
  return data as Item[];
  // if (data.length == 0) {
  //   return thunkApi.rejectWithValue('items are empty');
  // }
  // return thunkApi.fulfillWithValue(data);
});

type Item = {
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
  order_number: number;
  sizes: number[];
  rating: number;
};
export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}
type ItemSliceState = {
  items: Item[];
  status: Status.LOADING | Status.SUCCES | Status.ERROR;
};

const initialState: ItemSliceState = {
  items: [],
  status: Status.LOADING,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = Status.SUCCES;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});
export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
