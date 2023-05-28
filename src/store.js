import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import userReducer from './slices/employees.slice';

/**
 * Configuration object for Redux persist.
 *
 * @typedef {Object} PersistConfig
 * @property {string} key - The key for the persist configuration.
 * @property {object} storage - The storage engine to use for persisting the data.
 * @property {Function} stateReconciler - The state reconciler function to use.
 */
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

/**
 * The persisted reducer with persist configuration.
 *
 * @type {import('redux').Reducer}
 */
const persistedReducer = persistReducer(persistConfig, userReducer);

/**
 * The Redux store.
 *
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: persistedReducer,
  },
});

/**
 * The Redux persistor.
 *
 * @type {import('redux-persist').Persistor}
 */
const persistor = persistStore(store);

export { store, persistor };
