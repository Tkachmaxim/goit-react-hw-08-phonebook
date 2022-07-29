import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './phonebookOperations';

import { changeFilter } from './phonebook-actions';

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.fulfilled]: () => false,
  [addContacts.fulfilled]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => true,
  [addContacts.rejected]: () => true,
  [deleteContacts.rejected]: () => true,
});

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => [...payload],
  [addContacts.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
