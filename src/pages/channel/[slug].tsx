import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ChatContainer } from '@/container/ChatContainer';
import { requestAPI } from '@/utils/APIUtil';
import { User } from '@/context/AuthContext';

export type Channel = {
  id: number;
  name: string;
  description: string;
  participants: User[];
};

type Props = {
  data: Channel;
  channels: Channel[];
};
const ChatPage: NextPage<Props> = ({ data, channels }) => {
  return <ChatContainer channel={data} channels={channels} type="chat" />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await requestAPI<Channel>('/channel/info', { id: query.slug });
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  return { props: { data, channels } };
};

export default ChatPage;
