import FullpageLayout from '@/components/layouts/fullpage';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import Loading from '@/components/Loading';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const LoginSplashPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login/splash/3');
    }, 2000);
  }, [router]);

  return (
    <>
      <FullpageLayout noFooter={true} bgImage={'/bgis/l2.png'}>
        <Loading />
        <Image src="https://render-cdn.zepeto.io/20201011/03/39mqDdsd4JMIwMspcH" />
      </FullpageLayout>
    </>
  );
};

const Image = styled.img`
  left: 0;
  position: fixed;
  top: 30%;
`;

export default LoginSplashPage;
