import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchItemComments = createAsyncThunk('comments/fetchItemComments', async (id) => {
  const { data } = await axios.get(`/catalog/${id}`);
  return data;
});
const initialState = {
  comments: {
    items: [],
    status: 'loading',
  },
};
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    //Getting post comments
    [fetchItemComments.pending]: (state) => {
      state.comments.items = [];
      state.comments.status = 'loading';
    },
    [fetchItemComments.fulfilled]: (state, action) => {
      state.comments.items = action.payload;
      state.comments.status = 'loaded';
    },
    [fetchItemComments.rejected]: (state) => {
      state.comments.items = [];
      state.comments.status = 'error';
    },
  },
});

export const commentsReducer = commentSlice.reducer;
