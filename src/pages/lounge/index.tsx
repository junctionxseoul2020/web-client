import React from 'react';
import { NextPage } from 'next';

import ChatLayout from '@/components/layouts/chat';
import ChatComponent from '@/components/chats/chat';
import ChatInputComponent from '@/components/chats/input';
import GroupHeader, { GroupHeaderType } from '@/components/GroupHeader';

const LoungePage: NextPage = () => {
  return (
    <ChatLayout name="라운지">
      <GroupHeader type={GroupHeaderType.Lounge} />
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

export default LoungePage;
