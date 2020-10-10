import React from 'react';
import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import { requestAPI } from '@/utils/APIUtil';
import { Channel } from '@/pages/channel/[slug]';
import Chat from '@/components/layouts/chat';
import { User } from '@/context/AuthContext';

const GreetingPage: NextPage<{ users: User[]; channels: Channel[] }> = ({ users, channels }) => {
  return (
    <Chat name="JunctionX Seoul 2020" memberCount={users.length || 0} channels={channels}></Chat>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const users = await requestAPI<User[]>('/user/list', { workspaceId: 1 });
  console.log(users);
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  return { props: { users, channels } };
};

export default GreetingPage;
