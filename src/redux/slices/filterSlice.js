import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'Popularity',
    sort: 'rating',
  },
  sizeFilter: [],
  brandFilter: [],
  priceFilter: [],
  fabricFilter: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
      state.sizeFilter = action.payload.sizeFilter;
    },
    setSizeFilter(state, action) {
      state.sizeFilter.push(action.payload);
    },
    minusSizeFilter(state, action) {
      const sizeIndex = state.sizeFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.sizeFilter.splice(sizeIndex, 1);
      }
    },
    setBrandFilter(state, action) {
      state.brandFilter.push(action.payload);
    },
    minusBrandFilter(state, action) {
      const sizeIndex = state.brandFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.brandFilter.splice(sizeIndex, 1);
      }
    },
    setPriceFilter(state, action) {
      state.priceFilter.push(action.payload);
    },
    minusPriceFilter(state, action) {
      const sizeIndex = state.priceFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.priceFilter.splice(sizeIndex, 1);
      }
    },
    setFabricFilter(state, action) {
      state.fabricFilter.push(action.payload);
    },
    minusFabricFilter(state, action) {
      const sizeIndex = state.fabricFilter.indexOf(action.payload);
      if (sizeIndex !== -1) {
        state.fabricFilter.splice(sizeIndex, 1);
      }
    },
  },
});

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
  minusPriceFilter,
  setFabricFilter,
  minusFabricFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
