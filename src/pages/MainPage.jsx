import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';  

const MainWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

const MainPage = () => {
  return (
    <MainWrapper>
      <Logo src={logo} alt="JourneyHub Logo" />
      <h1>Welcome to JourneyHub</h1>
      <p>Your go-to API for exploring exciting endpoints.</p>
    </MainWrapper>
  );
};

export default MainPage;
