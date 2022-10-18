import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

import { Sort } from './filterSlice';
type Params = {
  sortType: Sort;
  categoryId: number;
  currentPage: number;
  search: string;
};
export const fetchItems = createAsyncThunk('item/fetchItemsStatus', async (params: Params) => {
  const { data } = await axios.get<Item[]>(
    `/catalog?${params.categoryId > 0 ? `category=${params.categoryId}` : ''}&sortBy=${
      params.sortType.sort
    }&page=${params.currentPage + 1}&limit=6&search=${params.search}`,
  );
  // `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?${
  //   categoryId > 0 ? `category=${categoryId}` : ''
  // }&search=${search}&sortBy=${sortType.sort}&order=desc&page=${currentPage + 1}&limit=6`,
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
  items: { products: Item[]; totalPages: number };
  status: Status.LOADING | Status.SUCCES | Status.ERROR;
};

const initialState: ItemSliceState = {
  items: { products: [], totalPages: 0 },
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
        state.items = { products: [], totalPages: 0 };
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = Status.SUCCES;
        //@ts-ignore
        state.items = totalPages;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = { products: [], totalPages: 0 };
      });
  },
});
export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
