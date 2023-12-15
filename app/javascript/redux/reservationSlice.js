 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import axios from 'axios';
 
 const URL_API = 'http://127.0.0.1:3000/api/v1/reservations';
 
 // Async thunk for adding reservations
 export const addReservation = createAsyncThunk(
   'reservations/addReservation',
   async (reservationData, thunkAPI) => {
     try {
       const resp = await axios.post(API_URL, reservationData);
       return resp.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error);
     }
   },
 );
 
 export const getReservations = createAsyncThunk(
   'reservations/getReservations',
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
 
 export const reservationSlice = createSlice({
   name: 'reservations',
   initialState,
   reducers: { },
   extraReducers(builder) {
     builder
      .addCase(addReservation.pending, (state) => {
       state.isLoading = true;
       state.error = undefined;
       })
     .addCase(addReservation.fulfilled, (state, action) => {
       state.isLoading = false;
       state.content.push(action.payload);
      })
     .addCase(addReservation.rejected, (state, action) => {
       state.isLoading = false;
       state.error = action.payload.reservation;
      })
     .addCase(getReservations.pending, (state) => {
         state.isLoading = true;
       })
 
       .addCase(getReservations.fulfilled, (state, action) => {
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
 
 
       .addCase(getReservations.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload.reservation;
       });
   },
 });
 
 export default reservationSlice.reducer;
