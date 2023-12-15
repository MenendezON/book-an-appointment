 import { configureStore, combineReducers } from '@reduxjs/toolkit';
 import motorbikesReducer from './motorbikes/motorbikeSlice';
 import reservationsReducer from './reservation/reservationSlice';
 import userAuthReducer from './userAuthSlice';
 
 // Combine reducers
 const rootReducer = combineReducers({
   motorbikes: motorbikesReducer,
   reservations: reservationsReducer,
   userAuth: userAuthReducer,
 });
 
 // Create store with combined reducers
 const store = configureStore({
   reducer: rootReducer,
 });
 
 export default store;
