import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ChatContainer } from '@/container/ChatContainer';
import { requestAPI } from '@/utils/APIUtil';
import { Channel } from '@/pages/channel/[slug]';

type Props = {
  data: Channel;
  channels: Channel[];
};
const LoungePage: NextPage<Props> = ({ data, channels }) => {
  return <ChatContainer channels={channels} type="lounge" channel={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await requestAPI<Channel>('/channel/lounge');
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  return { props: { data, channels } };
};

export default LoungePage;
