import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = '/api/v1';

const datatest = { user: { username: 'example@example.com', password: 'password123' } };
const createUser = createAsyncThunk('user/createUser', async (datatest) => {
  try {
    console.log(`${url}/users`);
    console.log(datatest);
    const response = await fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datatest),
    });

    if (!response.ok) {
      const responseBody = await response.json();
      console.error('Error:', response.status, responseBody);
    } else {
      console.log('process successful response');
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});

const loginUser = createAsyncThunk('user/loginUser', async (dataT) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataT),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }else {
      console.log('process successful response');
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});

const initialState = {
  isLoading: false,
  user: {},
  createUserMsg: {},
  error: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem('acess-token', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createUserMsg = action.payload;
        localStorage.setItem('acess-token', JSON.stringify(action.payload));
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },

});

export { loginUser, createUser };
export default userSlice.reducer;