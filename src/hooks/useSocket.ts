import socket from 'socket.io-client';

export function useSocket() {
  const chatSocket = socket.connect('https://junctionx.azurewebsites.net/');

  const readSocket = (event, action) => {
    chatSocket.on(event, action);
  };
  const sendSocket = (event, data) => {
    chatSocket.emit(event, ...data);
  };
  return {
    sendSocket,
    readSocket,
  };
}
