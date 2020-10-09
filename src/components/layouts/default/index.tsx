import React from 'react';
import styled from '@emotion/styled';

import Header from './parts/header';
import Sidebar from './parts/sidebar';

const DefaultLayout: React.FC = ({ children }) => {
  const ContentWrapper = styled.div``;
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </>
  );
};

export default DefaultLayout;
