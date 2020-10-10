import React from 'react';

import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';
import ChatComponent from '@/components/chats/chat';

const ChatPage: React.FC = () => {
  return (
    <ChatLayout>
      <IntroBox title="#channel_name" desc="이곳에 무엇이 들어갈지 적어주세요" />
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
    </ChatLayout>
  );
};

export default ChatPage;
