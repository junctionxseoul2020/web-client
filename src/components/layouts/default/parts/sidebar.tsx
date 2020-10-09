import React from 'react';
import styled from '@emotion/styled';

const SidebarComponent: React.FC = () => {
  const SidebarWrapper = styled.div`
    width: 82px;
    height: calc(100vh - 38px);
    background: var(--secondary);
    padding: 24px 0;
  `;

  return <SidebarWrapper></SidebarWrapper>;
};

export default SidebarComponent;
