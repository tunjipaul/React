import { configureStore } from '@reduxjs/toolkit';
import authReducer, { logout } from './slices/authSlice';
import documentReducer, { clearDocuments } from './slices/documentSlice';
import chatReducer, { clearChat } from './slices/chatSlice';
import uiReducer, { addNotification } from './slices/uiSlice';

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
  reducer: {
    auth: authReducer,
    documents: documentReducer,
    chat: chatReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crossSliceMiddleware),
});

export default store;
