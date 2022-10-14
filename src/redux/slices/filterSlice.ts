import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Sort = {
  name: 'Popularity' | 'Rating' | 'Price';
  sort: 'order_number' | 'rating' | 'price';
};
export type FilterSliceState = {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sortType: Sort;
  sizeFilter: string[];
  brandFilter: string[];
  priceFilter: number[];
  fabricFilter: string[];
};

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 0,
  sortType: {
    name: 'Popularity',
    sort: 'order_number',
  },
  sizeFilter: [],
  brandFilter: [],
  priceFilter: [2500, 7500],
  fabricFilter: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
      state.sizeFilter = action.payload.sizeFilter;
    },
    setSizeFilter(state, action: PayloadAction<string>) {
      state.sizeFilter.push(action.payload);
    },
    minusSizeFilter(state, action: PayloadAction<string>) {
      const sizeIndex = state.sizeFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.sizeFilter.splice(sizeIndex, 1);
      }
    },
    setBrandFilter(state, action: PayloadAction<string>) {
      state.brandFilter.push(action.payload);
    },
    minusBrandFilter(state, action: PayloadAction<string>) {
      const sizeIndex = state.brandFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.brandFilter.splice(sizeIndex, 1);
      }
    },
    setPriceFilter(state, action: PayloadAction<number[]>) {
      state.priceFilter = action.payload;
    },

    setFabricFilter(state, action: PayloadAction<string>) {
      state.fabricFilter.push(action.payload);
    },
    minusFabricFilter(state, action: PayloadAction<string>) {
      const sizeIndex = state.fabricFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.fabricFilter.splice(sizeIndex, 1);
      }
    },
  },
});
export const selectFilter = (state: RootState) => state.filterSlice;
export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
  setSizeFilter,
  minusSizeFilter,
  setBrandFilter,
  minusBrandFilter,
  setPriceFilter,

  setFabricFilter,
  minusFabricFilter,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
