import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const { data } = await axios.get(
    'https://62e3969e3c89b95396cb90f7.mockapi.io/contacts/contacts'
  );

  return data;
});

const addContacts = createAsyncThunk('contacts/addContacts', async contact => {
  const { data } = await axios.post(
    'https://62e3969e3c89b95396cb90f7.mockapi.io/contacts/contacts',
    contact
  );
  return data;
});

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await axios.delete(
    `https://62e3969e3c89b95396cb90f7.mockapi.io/contacts/contacts/${id}`
  );
  return id;
});

/* const fetchContacts = () => async dispatch => {
  dispatch(fetchContatcsRequest());
  try {
    const { data } = await axios.get(
      'https://62e3969e3c89b95396cb90f7.mockapi.io/contacts/contacts'
    );
    dispatch(fetchContatcsSuccess(data));
  } catch (error) {
    dispatch(fetchContatcsError(error));
  }
}; */

export { fetchContacts, addContacts, deleteContacts };
