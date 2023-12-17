 import { configureStore, combineReducers } from '@reduxjs/toolkit';
 import motorbikesReducer from './motorbikes/motorbikeSlice';
 import reservationsReducer from './reservation/reservationSlice';
 import authReducer from './user/authSlice';
 
 // Combine reducers
 const rootReducer = combineReducers({
   motorbikes: motorbikesReducer,
   reservations: reservationsReducer,
   auth: authReducer,
 });
 
 // Create store with combined reducers
 const store = configureStore({
   reducer: rootReducer,
 });
 
 export default store;
