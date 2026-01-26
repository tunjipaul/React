import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { logout } from './slices/authSlice';
import documentReducer, { clearDocuments } from './slices/documentSlice';
import chatReducer, { clearChat } from './slices/chatSlice';
import uiReducer, { addNotification } from './slices/uiSlice';

const persistConfig = {
  key: 'tunjipaul-ai-assistant',
  storage,
  whitelist: ['auth', 'documents'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  documents: documentReducer,
  chat: chatReducer,
  ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const crossSliceMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  if (action.type === 'documents/uploadDocument') {
    store.dispatch(addNotification({
      type: 'success',
      message: `Document "${action.payload.name}" uploaded successfully!`,
    }));
  }
  
  if (action.type === 'auth/logout') {
    store.dispatch(clearChat());
    store.dispatch(clearDocuments());
  }
  
  return result;
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(crossSliceMiddleware),
});

export const persistor = persistStore(store);
export default store;
