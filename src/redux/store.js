import { configureStore } from '@reduxjs/toolkit';
import youtubeSummarizerReducer from './slices/youtubeSummarizerSlice';

export const store = configureStore({
  reducer: {
    youtubeSummarizer: youtubeSummarizerReducer,
  },
});
