import React from 'react';
import { NextPage } from 'next';
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
  slug: number;
  data: Channel;
};
const ChatPage: NextPage<Props> = ({ data }) => {
  return <ChatContainer channel={data} />;
};

export async function getServerSideProps({ query }) {
  const data = await requestAPI<Channel>('/channel/info', { id: query.slug });
  return { props: { data } };
}

export default ChatPage;
