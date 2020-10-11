import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';
import ChatComponent from '@/components/chats/chat';
import ChatInputComponent from '@/components/chats/input';
import React, { useCallback } from 'react';
import { useChat } from '@/hooks/useChat';
import { Channel } from '@/pages/channel/[slug]';
import GroupHeader, { GroupHeaderType } from '@/components/GroupHeader';
import { useAuth } from '@/context/AuthContext';

type Props = {
  channel: Channel;
  channels: Channel[];
  type: 'lounge' | 'chat' | 'meet';
};
export const ChatContainer = React.memo<Props>(({ channel, channels, type }) => {
  const { user } = useAuth();
  const { data, sendMessage } = useChat(channel.id, user?.id || 0, 'hello');

  const handleSend = useCallback(
    message => {
      sendMessage(channel.id, user?.id || 0, message);
    },
    [channel.id, sendMessage, user?.id],
  );
  return (
    <ChatLayout
      name={'#' + channel.name}
      memberCount={channel.participants.length || 0}
      channels={channels}
    >
      {type === 'lounge' && <GroupHeader type={GroupHeaderType.Lounge} />}
      {type === 'meet' && <GroupHeader type={GroupHeaderType.Meet} />}
      {type === 'chat' && <IntroBox title={'#' + channel.name} desc={channel.description} />}
      <ChatSeperator />
      {data.map(chat => (
        <ChatComponent
          nickname={chat.author.name}
          time={chat.createdAt}
          content={chat.text}
          key={chat.id}
        />
      ))}
      <ChatInputComponent onSubmit={handleSend} />
    </ChatLayout>
  );
});
