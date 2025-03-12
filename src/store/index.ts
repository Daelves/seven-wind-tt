import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { entityApi } from '../api/entityApi';
import entityReducer from './entitySlice';

export const store = configureStore({
  reducer: {
    entity: entityReducer,
    [entityApi.reducerPath]: entityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entityApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
