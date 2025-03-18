import React from 'react';
import { AppContainer, Header, Main, StyledTabs, Footer } from './App.styles';
import YoutubeSummarizer from './components/YoutubeSummarizer/YoutubeSummarizer';
import GlobalStyles from './styles/GlobalStyles';
import PlantDiseaseDetector from './components/plant-disease-detector/PlantDiseaseDetector';

function App() {
  const items = [
    {
      key: '1',
      label: 'YouTube Summarizer',
      children: <YoutubeSummarizer />,
    },
    {
      key: '2',
      label: 'Plant Disease Detector',
      children: <PlantDiseaseDetector />,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <h1>AI Agents Hub</h1>
        </Header>
        
        <Main>
          <StyledTabs defaultActiveKey="1" items={items} />
        </Main>
        
        <Footer>
          <p>© 2025 AI Agents Hub</p>
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
