import styled from 'styled-components';
import { Card, Input, Button, Spin } from 'antd';

export const YoutubeSummarizerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    .ant-input {
      margin-bottom: 0.5rem;
    }
    
    .ant-btn {
      width: 100%;
    }
  }
`;

export const StyledInput = styled(Input)`
  flex: 1;
  font-size: 1rem;
`;

export const StyledButton = styled(Button)`
  margin-left: 8px;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  
  p {
    margin-top: 1rem;
    color: #666;
  }
`;

export const SummaryContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  
  .ant-card-body {
    padding: 1.5rem;
    white-space: pre-line;
  }
`;

export const StyledSpin = styled(Spin)`
  margin-bottom: 1rem;
`;
