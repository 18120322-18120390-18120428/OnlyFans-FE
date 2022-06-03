import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from '../slice/userSlice';
import sidebarSlice from '../slice/sidebarSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice'],
};
const rootReducer = combineReducers({
  userSlice,
  sidebarSlice,
});

export default persistReducer(persistConfig, rootReducer);
