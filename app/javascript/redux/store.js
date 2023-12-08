import { configureStore } from '@reduxjs/toolkit';
import motorbikesReducer from './motorbikes/motorbikeSlice';

const store = configureStore({
  reducer: {
    motorbikes: motorbikesReducer,
  },
});

export default store;