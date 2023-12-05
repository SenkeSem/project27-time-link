import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activitiesTime: '',
  activitiesImgUrl: '',
};

export const activitiesSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTime(state, action) {
      state.activitiesTime = action.payload;
    },

    setImgUrl(state, action) {
      state.activitiesImgUrl = action.payload;
    },
  },
});

export const { setTime, setImgUrl } = activitiesSlice.actions;

export default activitiesSlice.reducer;
