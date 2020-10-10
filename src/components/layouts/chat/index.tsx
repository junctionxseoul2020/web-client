import React from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '@/components/layouts/default';
import Sidebar from './sidebar';

const Chat: React.FC = () => {
  const ChatWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px auto;
    width: 100%;
    height: 100%;
  `;
  return (
    <DefaultLayout>
      <ChatWrapper>
        <Sidebar />
      </ChatWrapper>
    </DefaultLayout>
  );
};

export default Chat;
