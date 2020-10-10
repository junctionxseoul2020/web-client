import React from 'react';

import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';
import ChatSeperator from '@/components/chats/seperator';

const ChatPage: React.FC = () => {
  return (
    <ChatLayout>
      <IntroBox title="#channel_name" desc="이곳에 무엇이 들어갈지 적어주세요" />
      <ChatSeperator />
    </ChatLayout>
  );
};

export default ChatPage;
