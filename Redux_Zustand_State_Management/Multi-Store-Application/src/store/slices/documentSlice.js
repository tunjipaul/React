import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  documents: [],
  selectedDocument: null,
  isUploading: false,
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    uploadDocument: (state, action) => {
      state.documents.push({
        ...action.payload,
        id: Date.now(),
        uploadedAt: new Date().toISOString(),
      });
      state.isUploading = false;
    },
    
    setUploading: (state, action) => {
      state.isUploading = action.payload;
    },
    
    deleteDocument: (state, action) => {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
      if (state.selectedDocument?.id === action.payload) {
        state.selectedDocument = null;
      }
    },
    
    selectDocument: (state, action) => {
      state.selectedDocument = state.documents.find(doc => doc.id === action.payload);
    },
    
    clearDocuments: (state) => {
      state.documents = [];
      state.selectedDocument = null;
      state.isUploading = false;
    },
  },
});

export const { 
  uploadDocument, 
  setUploading, 
  deleteDocument, 
  selectDocument, 
  clearDocuments 
} = documentSlice.actions;

export const selectDocuments = (state) => state.documents.documents;
export const selectSelectedDocument = (state) => state.documents.selectedDocument;
export const selectIsUploading = (state) => state.documents.isUploading;

export default documentSlice.reducer;
