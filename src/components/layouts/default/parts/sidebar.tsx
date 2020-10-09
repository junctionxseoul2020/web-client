import React from 'react';
import styled from '@emotion/styled';
import ConferenceComponent from './sidebar__parts/conference';

const SidebarComponent: React.FC = () => {
  const SidebarWrapper = styled.div`
    width: 82px;
    height: calc(100vh - 38px);
    background: var(--secondary);
    padding: 24px 0;
    position: relative;
  `;

  const SidebarBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `;

  return (
    <SidebarWrapper>
      <ConferenceComponent now={true} />
      <ConferenceComponent time="12:00" />
      <SidebarBottom>
        <ConferenceComponent />
      </SidebarBottom>
    </SidebarWrapper>
  );
};

export default SidebarComponent;
