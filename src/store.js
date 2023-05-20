import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import userReducer from './slices/employees.slice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
