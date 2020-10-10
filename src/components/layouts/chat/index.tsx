import React from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '@/components/layouts/default';
import Sidebar from './sidebar';
import ChannelInfomationHeader from './channelHeader';
import { Channel } from '@/pages/channel/[slug]';

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

  return (
    <DefaultLayout>
      <ChatWrapper>
        <Sidebar channels={channels} />
        <div>
          <ChannelInfomationHeader name={name} memberCount={memberCount} />
          {children}
        </div>
      </ChatWrapper>
    </DefaultLayout>
  );
};

export default Chat;
