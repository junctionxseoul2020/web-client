import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Channel } from '@/pages/channel/[slug]';
import { ChatContainer } from '@/container/ChatContainer';
import { requestAPI } from '@/utils/APIUtil';

type Props = {
  data: Channel;
  channels: Channel[];
};

const MeetPage: NextPage<Props> = ({ data, channels }) => {
  return <ChatContainer channel={data} channels={channels} type="meet" />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await requestAPI<Channel>('/conference/info', { id: query.slug });
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  console.log(data);
  return { props: { data, channels } };
};

export default MeetPage;
