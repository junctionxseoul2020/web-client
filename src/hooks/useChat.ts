import { useSocketEvent } from '@/hooks/useSocketEvent';
import { useCallback, useEffect, useState } from 'react';
import { User } from '@/context/AuthContext';

type Chat = {
  id: number;
  text: string;
  author: User;
  createdAt: string;
};

export function useChat(channel: number, userId: number, msg: string) {
  const [data, setData] = useState<Chat[]>([]);
  const { readSocket, sendSocket } = useSocketEvent();

  useEffect(() => {
    sendSocket('joinRoom', [channel, userId]);
    readSocket('chatMessage', (userId: number, msg: string) => {
      setData(prevState => [...prevState, JSON.parse(msg)]);
    });
    readSocket('joinRoom', (name: string, chats: string) => {
      if (data.length === 0) {
        const jsonData = JSON.parse(chats);
        setData(jsonData);
      }
    });
  });

  const sendMessage = useCallback(
    (room, userId, msg) => {
      sendSocket('chatMessage', [room, userId, msg]);
    },
    [sendSocket],
  );
  return {
    data,
    sendMessage,
  };
}
