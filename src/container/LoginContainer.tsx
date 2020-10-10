import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useAuth, User } from '@/context/AuthContext';
import LoginPage from '@/pages/login/workspace';
import { useRouter } from 'next/router';

export const LoginContainer: NextPage = ({ children, ...pageProps }) => {
  const { user, userId, setLoggedOut, setLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const localUser: User | null = JSON.parse(localStorage.getItem('work_u') as string);
    if (!localUser || !localUser?.id) {
      return setLoggedOut();
    }
    setLoggedIn(localUser);
  }, [setLoggedIn, setLoggedOut]);

  if ((!userId || !user) && !router.pathname.includes('/login/')) {
    return <LoginPage {...pageProps} />;
  }
  return <>{children}</>;
};
