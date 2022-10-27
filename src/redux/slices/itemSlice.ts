import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

import { Sort } from './filterSlice';
type Params = {
  sortType: Sort;
  categoryId: number;
  currentPage: number;
  search: string;
  sizeFilter: string[];
  brandFilter: string[];
  priceFilter: number[];
  fabricFilter: string[];
};
export const fetchPopularItems = createAsyncThunk('posts/fetchPopulatItems', async () => {
  const { data } = await axios.get('/');
  return data;
});
export const fetchItems = createAsyncThunk('item/fetchItemsStatus', async (params: Params) => {
  const {
    sortType,
    categoryId,
    currentPage,
    search,
    sizeFilter,
    brandFilter,
    priceFilter,
    fabricFilter,
  } = params;
  const { data } = await axios.get<Item[]>(
    `/catalog?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&page=${
      currentPage + 1
    }&limit=6&${search ? `search=${search}` : ''}&lowPrice=${priceFilter[0]}&highPrice=${
      priceFilter[1]
    }&size=${sizeFilter}&brand=${brandFilter}&fabric=${fabricFilter}`,
  );

  return data as Item[];
});

type Item = {
  _id: string;
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
  sizes: string[];
  rating: number;
  fabric: string;
};
export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}
type ItemSliceState = {
  popularItems: Item[];
  items: { products: Item[]; totalPages: number };
  status: Status.LOADING | Status.SUCCES | Status.ERROR;
};

const initialState: ItemSliceState = {
  popularItems: [],
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
      //products
      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = { products: [], totalPages: 0 };
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = Status.SUCCES;
        //@ts-ignore
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = { products: [], totalPages: 0 };
      })
      //popular products
      .addCase(fetchPopularItems.pending, (state) => {
        state.status = Status.LOADING;
        state.popularItems = [];
      })
      .addCase(fetchPopularItems.fulfilled, (state, action) => {
        state.status = Status.SUCCES;
        //@ts-ignore
        state.popularItems = action.payload;
      })
      .addCase(fetchPopularItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.popularItems = [];
      });
  },
});
export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
