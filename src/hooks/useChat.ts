import { useSocketEvent } from '@/hooks/useSocketEvent';
import { useCallback, useEffect, useState } from 'react';

export function useChat(channel: number, userId: number, msg: string) {
  const [data, setData] = useState([]);
  const { readSocket, sendSocket } = useSocketEvent();

  useEffect(() => {
    sendSocket('joinRoom', [channel, userId]);
    readSocket('chatMessage', (userId, msg) => {
      setData(prevState => [...prevState, JSON.parse(msg)]);
    });
    readSocket('joinRoom', (name, chats) => {
      if (data.length === 0) {
        const jsonData = JSON.parse(chats);
        setData(jsonData);
      }
    });
  }, []);

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
