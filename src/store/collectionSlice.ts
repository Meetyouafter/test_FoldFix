import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CollectionState } from './types';

const initialState: CollectionState = {
  collection: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('api/collection', async () => {
  const response = await axios.get('https://robox-test.herokuapp.com/api/collection', {
    headers: {
      apikey: 'test123',
    },
  });
  return response.data;
});

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchUsers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        collection: action.payload.collection,
      }))
      .addCase(fetchUsers.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message ?? 'An error occurred',
      }));
  },
});

export default collectionSlice.reducer;
