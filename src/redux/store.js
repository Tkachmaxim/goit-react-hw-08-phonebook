import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
