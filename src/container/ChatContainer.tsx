import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';
import ChatComponent from '@/components/chats/chat';
import ChatInputComponent from '@/components/chats/input';
import React, { useCallback } from 'react';
import { useChat } from '@/hooks/useChat';
import { Channel } from '@/pages/channel/[slug]';

type Props = {
  channel: Channel;
};
export const ChatContainer = React.memo<Props>(({ channel }) => {
  const { data, sendMessage } = useChat(channel.id, 6, 'hello');

  const handleSend = useCallback(
    message => {
      sendMessage(channel.id, 6, message);
    },
    [channel.id, sendMessage],
  );
  return (
    <ChatLayout name={channel.name} memberCount={channel.participants.length || 0}>
      <IntroBox title={'#' + channel.name} desc={channel.description} />
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
