import React from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '@/components/layouts/default';
import Sidebar from './sidebar';
import ChannelInfomationHeader from './channelHeader';
import { Channel } from '@/pages/channel/[slug]';
import ScrollableFeed from 'react-scrollable-feed';

const Chat: React.FC<{ name: string; memberCount: number; channels: Channel[] }> = ({
  children,
  name,
  memberCount,
  channels,
}) => {
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
        <Sidebar channels={channels} />
        <div>
          <ChannelInfomationHeader name={name} memberCount={memberCount} />
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
