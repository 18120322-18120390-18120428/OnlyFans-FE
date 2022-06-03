import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);
export { store, persistor };
