import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authenticateUser = createAsyncThunk(
  'userAuth/authenticateUser',
  async (name, thunkAPI) => {
    try {
      // Fetch CSRF token from the meta tags in the document
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

      const resp = await axios.post('http://127.0.0.1:3000/login', { name }, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken, // Include the CSRF token in the headers
        },
      });

      return resp.data.success; // Assuming the response has a 'success' property
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userAuthSlice.reducer;
