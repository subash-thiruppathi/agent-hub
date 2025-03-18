import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import youtubeSummarizerService from '../../services/youtubeSummarizerService';

// Async thunk for summarizing a YouTube video
export const summarizeVideo = createAsyncThunk(
  'youtubeSummarizer/summarize',
  async (youtubeUrl, { rejectWithValue }) => {
    try {
      const response = await youtubeSummarizerService.summarizeVideo(youtubeUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred while summarizing the video');
    }
  }
);

const initialState = {
  youtubeUrl: '',
  summary: '',
  loading: false,
  error: null,
};

const youtubeSummarizerSlice = createSlice({
  name: 'youtubeSummarizer',
  initialState,
  reducers: {
    setYoutubeUrl: (state, action) => {
      state.youtubeUrl = action.payload;
    },
    clearSummary: (state) => {
      state.summary = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(summarizeVideo.pending, (state) => {
        state.loading = true;
        state.summary = '';
        state.error = null;
      })
      .addCase(summarizeVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload.summary;
      })
      .addCase(summarizeVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setYoutubeUrl, clearSummary } = youtubeSummarizerSlice.actions;

export default youtubeSummarizerSlice.reducer;
