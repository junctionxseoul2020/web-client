import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Channel } from '@/pages/channel/[slug]';
import { ChatContainer } from '@/container/ChatContainer';
import { requestAPI } from '@/utils/APIUtil';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

type Props = {
  data: any;
  channels: Channel[];
};

const MeetPage: NextPage<Props> = ({ data, channels }) => {
  return (
    <ChatContainer
      channel={data}
      channels={channels}
      type="meet"
      desc={dayjs(data.releasedAt).format('YYYY-MM-DD A HH:mm') + ' 시작'}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await requestAPI<any>('/conference/info', { id: query.slug });
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  console.log(data);
  return { props: { data, channels } };
};

export default MeetPage;
