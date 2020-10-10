import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import socketIO, { Socket } from 'socket.io-client';

const SocketContext = React.createContext<typeof Socket | undefined>(undefined);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider: NextPage = ({ children }) => {
  const [socket] = useState<typeof Socket>(
    socketIO.connect('https://junctionx.azurewebsites.net/'),
  );

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
