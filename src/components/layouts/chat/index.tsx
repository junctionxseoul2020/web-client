import React from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '@/components/layouts/default';
import Sidebar from './sidebar';
import ChannelInfomationHeader from './channelHeader';

const Chat: React.FC<{ name: string }> = ({ children, name }) => {
  const ChatWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px auto;
    width: 100%;
    height: 100%;
  `;
  const ChatContent = styled.div`
    position: relative;
    height: calc(100vh - 38px);
  `;
  const ChatInnerContent = styled.div`
    overflow: auto;
  `;

  return (
    <DefaultLayout>
      <ChatWrapper>
        <Sidebar />
        <ChatContent>
          <ChatInnerContent>
            <ChannelInfomationHeader name={name} />
            {children}
          </ChatInnerContent>
        </ChatContent>
      </ChatWrapper>
    </DefaultLayout>
  );
};

export default Chat;
