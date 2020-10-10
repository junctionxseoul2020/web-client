import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useAuth, User } from '@/context/AuthContext';
import LoginPage from '@/pages/test2';

export const LoginContainer: NextPage = ({ children, ...pageProps }) => {
  const { user, userId, setLoggedOut, setLoggedIn } = useAuth();

  useEffect(() => {
    const localUser: User | null = JSON.parse(localStorage.getItem('work_u'));
    if (!localUser?.id) {
      setLoggedOut(undefined);
    }
    setLoggedIn(localUser);
  }, [setLoggedIn, setLoggedOut]);

  if (!userId || !user) {
    return <LoginPage {...pageProps} />;
  }
  return <>{children}</>;
};
