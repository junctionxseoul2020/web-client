import FullpageLayout from '@/components/layouts/fullpage';
import React from 'react';
import Loading from '@/components/Loading';
import { NextPage } from 'next';

const LoadingPage: NextPage = () => {
  return (
    <FullpageLayout>
      <Loading />
    </FullpageLayout>
  );
};

export default LoadingPage;
