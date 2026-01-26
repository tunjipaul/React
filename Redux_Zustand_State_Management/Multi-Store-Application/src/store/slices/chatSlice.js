import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  isAgentTyping: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
    },
    
    setAgentTyping: (state, action) => {
      state.isAgentTyping = action.payload;
    },
    
    sendQuery: (state, action) => {
      state.messages.push({
        id: Date.now(),
        role: 'user',
        content: action.payload,
        timestamp: new Date().toISOString(),
      });
      state.isAgentTyping = true;
    },
    
    clearChat: (state) => {
      state.messages = [];
      state.isAgentTyping = false;
    },
  },
});

export const { addMessage, setAgentTyping, sendQuery, clearChat } = chatSlice.actions;

export const selectMessages = (state) => state.chat.messages;
export const selectIsAgentTyping = (state) => state.chat.isAgentTyping;

export default chatSlice.reducer;
