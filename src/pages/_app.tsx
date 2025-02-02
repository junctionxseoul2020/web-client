import React from 'react';
import type { AppProps } from 'next/app';

import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion'; // Use only { cache } from 'emotion'. Don't use { css }.
import globalStyles from '@/styles/global';
import { SocketProvider } from '@/context/SocketSontext';
import { AuthProvider } from '@/context/AuthContext';
import { LoginContainer } from '@/container/LoginContainer';
import Head from 'next/head';

import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Head>
        <title>@work</title>
      </Head>
      <AuthProvider>
        <LoginContainer>
          <SocketProvider>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </SocketProvider>
        </LoginContainer>
      </AuthProvider>
    </CacheProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
