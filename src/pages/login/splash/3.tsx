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
      router.push('/');
    }, 2000);
  }, [router]);

  return (
    <>
      <FullpageLayout noFooter={true} bgImage={'/bgis/l3.png'}>
        <Loading />
        <Image src="https://render-cdn.zepeto.io/20201011/03/39mqBusd4HnhRKmJrL" />
      </FullpageLayout>
    </>
  );
};

const Image = styled.img`
  transform: rotateY(180deg) scale(0.77);
  right: 0;
  position: fixed;
  top: 50%;
`;

export default LoginSplashPage;
