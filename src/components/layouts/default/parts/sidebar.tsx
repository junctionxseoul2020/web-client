import React from 'react';
import styled from '@emotion/styled';
import ConferenceComponent from './sidebar__parts/conference';

const SidebarComponent: React.FC = () => {
  const SidebarWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 82px;
    height: calc(100vh - 38px);
    background: var(--secondary);
    padding: 24px 0;
  `;

  return (
    <SidebarWrapper>
      <ConferenceComponent />
    </SidebarWrapper>
  );
};

export default SidebarComponent;
