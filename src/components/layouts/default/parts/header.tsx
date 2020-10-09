import React from 'react';
import styled from '@emotion/styled';

const HeaderComponent: React.FC = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
  `;
  const UserSection = styled.div``;
  return (
    <HeaderWrapper>
      <div></div>
      <div></div>
      <div></div>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
