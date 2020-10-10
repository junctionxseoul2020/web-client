import React from 'react';
import styled from '@emotion/styled';
import ItemComponent from './sidebar__parts/item';
import Comment from '@/components/icons/comment';
import LogOff from '@/components/icons/logoff';
import Coffee from '@/components/icons/coffee';
import PlusIcon from '@/components/icons/plus';
import { Modal, useModal } from '@/hooks/useModal';

const SidebarComponent: React.FC = () => {
  const { openModal } = useModal();

  return (
    <SidebarWrapper>
      <ItemComponent icon={<Comment />} now={true} />
      <ItemComponent icon={<Comment />} time="12:00" />
      <ItemComponent href="/lounge" icon={<Coffee />} />
      <ItemComponent icon={<PlusIcon />} onClick={() => openModal(Modal.AddConference)} />
      <SidebarBottom>
        <ItemComponent icon={<LogOff />} />
      </SidebarBottom>
    </SidebarWrapper>
  );
};

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

export default SidebarComponent;
