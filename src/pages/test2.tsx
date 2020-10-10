import React from 'react';
import DefaultLayout from '@/components/layouts/chat';
import { GetServerSideProps, NextPage } from 'next';
import { requestAPI } from '@/utils/APIUtil';
import { Channel } from '@/pages/channel/[slug]';

type Props = {
  channels: Channel[];
};
const LoginPage: NextPage<Props> = ({ channels }) => {
  return <DefaultLayout name="login" channels={channels} memberCount={1} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  return { props: { channels } };
};
export default LoginPage;
