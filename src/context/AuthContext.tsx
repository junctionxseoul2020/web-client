import React, { Dispatch, useCallback, useContext, useState } from 'react';
import { NextPage } from 'next';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  hashcode: string;
  status: string;
  photo: string;
};
export type AuthState = {
  user: User | undefined;
  userId: number | undefined;
  setLoggedIn: Dispatch<User>;
  setLoggedOut: Dispatch<void>;
};

const AuthContext = React.createContext<AuthState>({
  user: undefined,
  userId: undefined,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: NextPage = ({ children }) => {
  const [userData, setUserData] = useState<User | undefined>();

  const setLoggedIn = useCallback((user: User) => {
    localStorage.setItem('work_u', JSON.stringify(user));
    setUserData(user);
  }, []);
  const setLoggedOut = useCallback(() => {
    localStorage.removeItem('work_u');
    setUserData(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: userData, userId: userData?.id || undefined, setLoggedOut, setLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
