import FullpageLayout from '@/components/layouts/fullpage';
import React, { useEffect } from 'react';
import Loading from '@/components/Loading';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const LoginSplashPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login/splash/2');
    }, 1000);
  }, [router]);

  return (
    <>
      <FullpageLayout noFooter={true} bgImage={'/bgis/l1.png'}>
        <Loading />
      </FullpageLayout>
    </>
  );
};

export default LoginSplashPage;
