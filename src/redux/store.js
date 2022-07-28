import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducer';

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfig, phonebookReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
