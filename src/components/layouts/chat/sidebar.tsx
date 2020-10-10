import React from 'react';
import styled from '@emotion/styled';
import CdownIcon from '@/components/icons/cdown';
import HeadLinkItem from './sidebar__parts/headLink';
import MoreIcon from '@/components/icons/more';
import ChannelItem from './sidebar__parts/channelItem';
import ChannelAdd from './sidebar__parts/channelAdd';
import UserItem from './sidebar__parts/userItem';
import { NextPage } from 'next';
import { Channel } from '@/pages/channel/[slug]';

type Props = {
  channels: Channel[];
};

const Sidebar: NextPage<Props> = ({ channels }) => {
  return (
    <SidebarWrapper>
      <TitleSection>
        <Title>JunctionX Seoul 2020</Title>
        <CdownIcon />
      </TitleSection>
      <HeaderWrapper>
        <HeadLinkItem>Threads</HeadLinkItem>
        <HeadLinkItem>All DMs</HeadLinkItem>
        <HeadLinkItem>Drafts</HeadLinkItem>
        <HeadLinkItem>Mentions & reactions</HeadLinkItem>
        <HeadLinkItem fontWeight="normal">
          <MoreIcon /> More
        </HeadLinkItem>
      </HeaderWrapper>
      <GroupWrapper>
        <GroupTitle>
          <CdownIcon /> Channels
        </GroupTitle>
        {channels?.map(channel => (
          <ChannelItem href={`/channel/${channel.id}`}>{channel.name}</ChannelItem>
        ))}
        <ChannelAdd>Add Channels</ChannelAdd>
      </GroupWrapper>
      <GroupWrapper>
        <GroupTitle>
          <CdownIcon /> Direct messages
        </GroupTitle>
        <UserItem nickname="Yeji" desc="you" />
        <UserItem nickname="Kimyoo" />
        <UserItem nickname="Minpark" />
      </GroupWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 100%;
  border-right: 1px solid #e0e2ea;
`;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #e0e2ea;
  padding: 0 16px;
  svg {
    margin-left: 10px;
  }
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

const HeaderWrapper = styled.div`
  padding: 11px 0;
`;

const GroupWrapper = styled.div`
  padding: 10px 0;
`;
const GroupTitle = styled.div`
  color: var(--dark);
  display: block;
  padding: 7px 16px;
  font-size: 15px;
  font-weight: normal;
  cursor: pointer;
`;

export default Sidebar;
