import React from 'react';

import DefaultLayout from '@/components/layouts/chat';
import { useChat } from '@/hooks/useChat';

const TestPage: React.FC = () => {
  const { data, sendMessage } = useChat(1, 6, 'hello');
  return (
    <DefaultLayout name="test">
      {data.map(chat => (
        <div key={chat.id}>
          {chat.text}
          <br />
        </div>
      ))}
    </DefaultLayout>
  );
};

export default TestPage;
