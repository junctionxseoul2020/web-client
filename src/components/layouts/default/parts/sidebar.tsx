import React from 'react';
import styled from '@emotion/styled';
import ItemComponent from './sidebar__parts/item';
import Comment from '@/components/icons/comment';
import LogOff from '@/components/icons/logoff';
import Coffee from '@/components/icons/coffee';
import PlusIcon from '@/components/icons/plus';

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
      <ItemComponent icon={<Comment />} now={true} />
      <ItemComponent icon={<Comment />} time="12:00" />
      <ItemComponent icon={<Coffee />} />
      <ItemComponent icon={<PlusIcon />} />
      <SidebarBottom>
        <ItemComponent icon={<LogOff />} />
      </SidebarBottom>
    </SidebarWrapper>
  );
};

export default SidebarComponent;
