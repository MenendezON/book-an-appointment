 import { configureStore, combineReducers } from '@reduxjs/toolkit';
 import motorbikesReducer from './motorbikes/motorbikeSlice';
 import reservationsReducer from './reservation/reservationSlice';
 import userReducer from './user/userSlice';
 
 // Combine reducers
 const rootReducer = combineReducers({
   motorbikes: motorbikesReducer,
   reservations: reservationsReducer,
   user: userReducer,
 });
 
 // Create store with combined reducers
 const store = configureStore({
   reducer: rootReducer,
 });
 
 export default store;
