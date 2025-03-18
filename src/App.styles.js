import styled from 'styled-components';
import { Tabs } from 'antd';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', Arial, sans-serif;
`;

export const Header = styled.header`
  background-color: #f8f9fa;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h1 {
    margin: 0;
    color: #333;
    font-size: 2rem;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    justify-content: center;
    
    .ant-tabs-tab {
      font-weight: 500;
    }
  }
  
  .ant-tabs-content {
    padding: 2rem 0;
  }
`;

export const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem 0;
  text-align: center;
  margin-top: auto;
  
  p {
    margin: 0;
    color: #666;
  }
`;
