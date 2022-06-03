import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initialState,
  reducers: {
    updateNumber(state, actions) {
      state.number = actions.payload.number;
    },
  },
});

const { actions, reducer } = sidebarSlice;
export const { updateNumber } = actions;
export default reducer;
