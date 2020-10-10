import { useSocket } from '@/context/SocketSontext';
import { useCallback } from 'react';

export function useSocketEvent() {
  const chatSocket = useSocket();

  const readSocket = useCallback(
    (event, action) => {
      chatSocket.on(event, action);
    },
    [chatSocket],
  );
  const sendSocket = useCallback(
    (event, data) => {
      chatSocket.emit(event, ...data);
    },
    [chatSocket],
  );
  return {
    sendSocket,
    readSocket,
  };
}
