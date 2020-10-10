import { useSocket } from '@/hooks/useSocket';
import { useCallback, useEffect, useState } from 'react';

export function useChat(channel: number, userId: number, msg: string) {
  const [data, setData] = useState([]);
  const { readSocket, sendSocket } = useSocket();

  useEffect(() => {
    sendSocket('joinRoom', [channel, userId]);
    readSocket('chatMessage', data => {
      setData(prevState => [...prevState, data]);
    });
    readSocket('joinRoom', (name, chats) => {
      if (data.length === 0) {
        const jsonData = JSON.parse(chats);
        setData(jsonData);
      }
    });
  }, [channel, readSocket, sendSocket, userId]);

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
