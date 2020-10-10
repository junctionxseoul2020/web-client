import React, { useCallback } from 'react';
import { NextPage } from 'next';

import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';
import ChatComponent from '@/components/chats/chat';
import ChatInputComponent from '@/components/chats/input';
import { useChat } from '@/hooks/useChat';

const ChatPage: NextPage<{ slug?: string | string[] }> = ({ slug }) => {
  const { data, sendMessage } = useChat(1, 6, 'hello');

  const handleSend = useCallback(
    message => {
      sendMessage(1, 6, message);
    },
    [sendMessage],
  );

  return (
    <ChatLayout name={String(slug)}>
      <IntroBox title={'#' + slug} desc="이곳에 무엇이 들어갈지 적어주세요" />
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
};

ChatPage.getInitialProps = async ({ query }) => {
  return { slug: query.slug };
};

export default ChatPage;
