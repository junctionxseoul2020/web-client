import React from 'react';

import ChatLayout from '@/components/layouts/chat';
import IntroBox from '@/components/chats/introBox';

const ChatPage: React.FC = () => {
  return (
    <ChatLayout>
      <IntroBox />
    </ChatLayout>
  );
};

export default ChatPage;
