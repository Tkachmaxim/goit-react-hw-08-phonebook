import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      toast.warn('Something wrong, check input data');
      return thunkAPI.rejectWithValue(true);
    }
  }
);

const login = createAsyncThunk(
  'auth/login  ',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);

      return data;
    } catch (err) {
      toast.warn('Something wrong, check input data');
      return thunkAPI.rejectWithValue(true);
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
