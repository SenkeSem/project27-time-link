import { configureStore } from '@reduxjs/toolkit';
import activitiesSlice from '../redux/slices/activitiesSlice.js';

export const store = configureStore({
  reducer: {
    activities: activitiesSlice,
  },
});
