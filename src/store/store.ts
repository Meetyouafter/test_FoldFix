import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import collectionSlice from './dataSlice/collectionSlice';

const store = configureStore({
  reducer: {
    collection: collectionSlice,
  },
  middleware: [...getDefaultMiddleware({
    serializableCheck: {
      ignoredPaths: ['payload.headers'],
    },
  })],
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
