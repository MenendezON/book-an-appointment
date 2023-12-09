import { configureStore } from '@reduxjs/toolkit';
import motorbikesReducer from './motorbikes/motorbikeSlice';
import userAuthReducer from './userAuthSlice';

const store = configureStore({
  reducer: {
    motorbikes: motorbikesReducer,
    userAuth: userAuthReducer, // Add the userAuth reducer
  },
});

export default store;
