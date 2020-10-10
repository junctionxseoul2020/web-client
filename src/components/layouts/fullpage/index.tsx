import { NextPage } from 'next';
import React from 'react';
import styled from '@emotion/styled';

const FullpageLayout: NextPage = () => {
  return <FullpageLayoutWrapper></FullpageLayoutWrapper>;
};

const FullpageLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default FullpageLayout;
