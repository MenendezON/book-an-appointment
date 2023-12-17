// authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for user registration
export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/users', userData);
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error message from the server
  }
});

// Async thunk for user login
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error message from the server
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Reducer for the successful registration
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.status = 'succeeded';
      state.error = null;
    });

    // Reducer for the successful login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.status = 'succeeded';
      state.error = null;
    });

    // Reducers for pending and rejected states
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
