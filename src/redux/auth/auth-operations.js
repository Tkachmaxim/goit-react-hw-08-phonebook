import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (err) {
    alert(err.response.data.message);
  }
});

const login = createAsyncThunk(
  'auth/login  ',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      console.log(data);

      return data;
    } catch (err) {
      alert('Not correct name or password');
      console.log(err);
    }
  }
);

const logOut = createAsyncThunk('auth/logout  ', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (err) {
    console.log(err);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const authOperations = { register, login, logOut, fetchCurrentUser };

export default authOperations;
