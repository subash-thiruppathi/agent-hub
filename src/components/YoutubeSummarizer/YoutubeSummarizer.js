import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { message } from 'antd';
import parse from 'html-react-parser';

import { setYoutubeUrl, summarizeVideo } from '../../redux/slices/youtubeSummarizerSlice';
import {
  YoutubeSummarizerContainer,
  SearchContainer,
  Title,
  Subtitle,
  InputContainer,
  StyledInput,
  StyledButton,
  LoadingContainer,
  SummaryContainer,
  StyledCard,
  StyledSpin
} from './YoutubeSummarizer.styles';

const YoutubeSummarizer = () => {
  const dispatch = useDispatch();
  const { youtubeUrl, summary, loading, error } = useSelector(state => state.youtubeSummarizer);
  const [messageApi, contextHolder] = message.useMessage();

  const handleInputChange = (e) => {
    dispatch(setYoutubeUrl(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSummarize();
    }
  };

  const handleSummarize = async () => {
    if (!youtubeUrl) {
      messageApi.error('Please enter a YouTube URL');
      return;
    }

    try {
      const resultAction = await dispatch(summarizeVideo(youtubeUrl));
      if (summarizeVideo.rejected.match(resultAction)) {
        messageApi.error(resultAction.payload || 'An error occurred while summarizing the video');
      }
    } catch (err) {
      messageApi.error('An error occurred while summarizing the video');
    }
  };

  // Show error message when error state changes
  useEffect(() => {
    if (error && !loading) {
      messageApi.error(error);
    }
  }, [error, loading, messageApi]);

  return (
    <YoutubeSummarizerContainer>
      {contextHolder}
      <SearchContainer>
        <Title>YouTube Video Summarizer</Title>
        <Subtitle>Enter a YouTube URL to get a concise summary of the video</Subtitle>
        
        <InputContainer>
          <StyledInput
            size="large"
            value={youtubeUrl}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter YouTube URL"
            disabled={loading}
          />
          <StyledButton
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            loading={loading}
            onClick={handleSummarize}
            disabled={!youtubeUrl || loading}
          >
            Summarize
          </StyledButton>
        </InputContainer>
      </SearchContainer>

      {loading && (
        <LoadingContainer>
          <StyledSpin size="large" />
          <p>Summarizing video, please wait...</p>
        </LoadingContainer>
      )}

      {summary && !loading && (
        <SummaryContainer>
          <StyledCard title="Video Summary">
            {typeof summary === 'string' ? parse(summary) : summary}
          </StyledCard>
        </SummaryContainer>
      )}
    </YoutubeSummarizerContainer>
  );
};

export default YoutubeSummarizer;
