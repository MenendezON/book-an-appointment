import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = 'http://127.0.0.1:3000/api/v1/motorbikes';

// Async thunk for adding motorbikes
export const addMotorbike = createAsyncThunk(
  'motorbikes/addMotorbike',
  async (motorbikeData, thunkAPI) => {
    try {
      const resp = await axios.post(API_URL, motorbikeData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getMotorbikes = createAsyncThunk(
  'motorbikes/getMotorbikes',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(URL_API);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  content: [],
  isLoading: false,
  error: undefined,
};

export const motorbikeSlice = createSlice({
  name: 'motorbikes',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
     .addCase(addMotorbike.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
      })
    .addCase(addMotorbike.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content.push(action.payload);
     })
    .addCase(addMotorbike.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.motorbike;
     })
    .addCase(getMotorbikes.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getMotorbikes.fulfilled, (state, action) => {
        const newContent = [];
        const keys = Object.keys(action.payload);
        keys.forEach((keyOfActionPayload) => {
          newContent.push({
            id: keyOfActionPayload,
            ...action.payload[keyOfActionPayload],
          });
        });
        state.isLoading = false;
        state.content = newContent;
      })


      .addCase(getMotorbikes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.motorbike;
      });
  },
});

export default motorbikeSlice.reducer;