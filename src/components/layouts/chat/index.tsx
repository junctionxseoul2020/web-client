import React from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '@/components/layouts/default';
import Sidebar from './sidebar';
import ChannelInfomationHeader from './channelHeader';

const Chat: React.FC = ({ children }) => {
  const ChatWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px auto;
    width: 100%;
    height: 100%;
  `;
  const ChatContent = styled.div`
    position: relative;
  `;

  return (
    <DefaultLayout>
      <ChatWrapper>
        <Sidebar />
        <ChatContent>
          <ChannelInfomationHeader />
          {children}
        </ChatContent>
      </ChatWrapper>
    </DefaultLayout>
  );
};

export default Chat;
