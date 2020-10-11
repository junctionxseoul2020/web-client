import FullpageLayout from '@/components/layouts/fullpage';
import React from 'react';
import Loading from '@/components/Loading';
import { NextPage } from 'next';

const LoginSplashPage: NextPage = () => {
  return (
    <>
      <FullpageLayout noFooter={true}>
        <Loading />
      </FullpageLayout>
    </>
  );
};

export default LoginSplashPage;
