import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import all the reducers
import booksReducer from './books/slice';
import authReducer from './auth/slice';

const persistConfig = {
  key: 'root',
  storage
};

// Combine Reducers
const reducer = combineReducers({
  books: booksReducer,
  auth: authReducer,
})

// Create persisted versions of the reducers
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };