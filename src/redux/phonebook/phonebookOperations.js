import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAIPI) => {
    if (thunkAIPI.getState().auth.token) {
      axios.defaults.headers.common.Authorization = `Bearer ${
        thunkAIPI.getState().auth.token
      }`;
    }
    const { data } = await axios.get('/contacts');
    return data;
  }
);

const addContacts = createAsyncThunk('contacts/addContacts', async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
});

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

export { fetchContacts, addContacts, deleteContacts };
