import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../services/userAxios';

export const login = createAsyncThunk('user/login', async (params) => {
  return await userApi.login(params).then((res) => res.data);
});
export const getInfo = createAsyncThunk('user/get-info', async (params) => {
  return await userApi.getInfo().then((res) => res.data);
});

const initialState = {
  isAccount: false,
  account: {},
  status: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isAccount = false;
      state.account = {};
      localStorage.setItem('jwt', '');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const data = action.payload;

      if (data) {
        state.isAccount = true;
        localStorage.setItem('jwt', data.accessToken);
        state.account = data.user;
      } else {
        state.isAccount = false;
        state.account = {};
        localStorage.setItem('jwt', '');
      }
    });
    builder.addCase(getInfo.fulfilled, (state, action) => {
      const data = action.payload;

      if (data.user) {
        state.account = data.user;
        state.isAccount = true;
      } else {
        state.account = {};
        state.isAccount = false;
      }
    });
    builder.addCase(getInfo.rejected, (state, action) => {
      state.account = {};
      state.isAccount = false;
    });
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
