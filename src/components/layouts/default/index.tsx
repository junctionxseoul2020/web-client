import React from 'react';
import styled from '@emotion/styled';

import Header from './parts/header';
import Sidebar from './parts/sidebar';
import ModalProvider from '@/components/ModalProvider';

const DefaultLayout: React.FC = ({ children }) => {
  const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 82px auto;
  `;
  const ContentWrapper = styled.div``;
  return (
    <>
      <ModalProvider />
      <Header />
      <LayoutWrapper>
        <Sidebar />
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    </>
  );
};

export default DefaultLayout;
