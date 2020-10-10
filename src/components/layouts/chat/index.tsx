import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import ScrollableFeed from 'react-scrollable-feed';

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
    height: calc(100vh - 102px);
    overflow: auto;
  `;
  const ChatInnerContent = styled.div`
    padding-bottom: 100px;
  `;

  return (
    <DefaultLayout>
      <ChatWrapper>
        <Sidebar />
        <div>
          <ChannelInfomationHeader name={name} />
          <ChatContent>
            <ScrollableFeed>
              <ChatInnerContent>{children}</ChatInnerContent>
            </ScrollableFeed>
          </ChatContent>
        </div>
      </ChatWrapper>
    </DefaultLayout>
  );
};

export default Chat;
