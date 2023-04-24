import {
  createSlice, PayloadAction, SerializedError, createAsyncThunk,
} from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

type Project = {
  discord: string,
  display_name: string,
  img_url: string,
  is_verified: boolean,
  project_slug: string,
  supply: number,
  tensor_slug: string,
  tensor_whitelist: string,
  twitter: string,
  website: string,
}

export type User = {
  collection_id: string,
  floor_price: number,
  project: Project,
}

export type Collection = {
  collection: User[],
}

type IInitialState = {
  collection: User[],
  errors: any,
  loading: boolean,
}

export const getCollectionThunk = createAsyncThunk(
  'api/collection',
  async () => {
    const response = await axios.get('https://robox-test.herokuapp.com/api/collection', {
      headers: {
        apikey: 'test123',
      },
    });
    return response;
  },
);

const initialState: IInitialState = {
  collection: [],
  errors: null,
  loading: true,
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    updateCollection: (state, action: PayloadAction<User[]>) => ({
      ...state,
      collection: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCollectionThunk.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getCollectionThunk.rejected, (state, action: PayloadAction<SerializedError>) => ({
        ...state,
        loading: false,
        errors: action.payload,
      }))
      .addCase(getCollectionThunk.fulfilled, (
        state,
        action: PayloadAction<AxiosResponse<User[]>>,
      ) => ({
        ...state,
        loading: false,
        errors: null,
        collection: action.payload.data,
      }));
  },
});

export const { updateCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
