import React from 'react';
import styled from '@emotion/styled';
import CdownIcon from '@/components/icons/cdown';
import HeadLinkItem from './sidebar__parts/headLink';
import MoreIcon from '@/components/icons/more';

const Sidebar: React.FC = () => {
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

  const ContentWrapper = styled.div`
    padding: 11px 0;
  `;

  return (
    <SidebarWrapper>
      <TitleSection>
        <Title>JunctionX Seoul 2020</Title>
        <CdownIcon />
      </TitleSection>
      <ContentWrapper>
        <HeadLinkItem>Threads</HeadLinkItem>
        <HeadLinkItem>All DMs</HeadLinkItem>
        <HeadLinkItem>Drafts</HeadLinkItem>
        <HeadLinkItem>Mentions & reactions</HeadLinkItem>
        <HeadLinkItem fontWeight="normal">
          <MoreIcon /> More
        </HeadLinkItem>
      </ContentWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
