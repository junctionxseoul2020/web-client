import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Error from 'next/error';

import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';
import ChatComponent from '@/components/chats/chat';
import ChatInputComponent from '@/components/chats/input';

const ChatPage: NextPage<{ slug?: string | string[] }> = ({ slug }) => {
  return (
    <ChatLayout name={String(slug)}>
      <IntroBox title={'#' + slug} desc="이곳에 무엇이 들어갈지 적어주세요" />
      <ChatSeperator />
      <ChatComponent nickname="강희원" time="12:00AM" content={'컨텐츠는 string이나,'} />
      <ChatComponent
        nickname="도다"
        time="12:00AM"
        content={
          <>
            <pre>JSX</pre>가 들어갈 수도 있어요. <b>bold</b> <i>italic</i>
          </>
        }
      />
      <ChatInputComponent />
    </ChatLayout>
  );
};

ChatPage.getInitialProps = async ({ query }) => {
  return { slug: query.slug };
};

export default ChatPage;
