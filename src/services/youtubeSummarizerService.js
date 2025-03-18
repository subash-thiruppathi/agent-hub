import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const youtubeSummarizerService = {
  summarizeVideo: (youtubeUrl) => {
    return axios.post(`${API_URL}/youtube/summarize`, { url: youtubeUrl });
  }
};

export default youtubeSummarizerService;
