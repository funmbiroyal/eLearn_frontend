import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
  },
});

export const RootState = store.getState;
