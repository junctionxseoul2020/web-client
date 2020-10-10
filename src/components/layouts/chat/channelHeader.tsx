import React from 'react';
import styled from '@emotion/styled';
import InfoIcon from '@/components/icons/info';
import UserAdd from '@/components/icons/user-add';

const ChannelInfomationHeader: React.FC = () => {
  const InfoHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    border-bottom: solid 1px #e0e2ea;
    padding: 0 18px;
  `;

  const ChannelName = styled.h1`
    color: #030303;
    font-size: 15px;
    margin: 0;
    line-height: 19px;
  `;
  const ChannelDesc = styled.p`
    color: var(--grey);
    font-size: 12px;
    margin: 0;
    line-height: 16px;
  `;

  const RightSide = styled.div`
    display: flex;
    .icon-userAdd {
      margin-left: 14px;
      margin-right: 14px;
    }
  `;

  const UserProfileBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
  `;

  const UserCount = styled.span`
    color: #030303;
    font-size: 13px;
    margin-left: 12px;
  `;

  const UserProfilePic = styled.img`
    width: 26px;
    height: 26px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    margin-right: -4px;
  `;

  return (
    <InfoHeaderWrapper>
      <div>
        <ChannelName>#channel_name</ChannelName>
        <ChannelDesc>Add a topic</ChannelDesc>
      </div>
      <RightSide>
        <UserProfileBox>
          <UserProfilePic src="https://via.placeholder.com/150" />
          <UserProfilePic src="https://via.placeholder.com/150" />
          <UserProfilePic src="https://via.placeholder.com/150" />
          <UserCount>15</UserCount>
        </UserProfileBox>
        <UserAdd />
        <InfoIcon />
      </RightSide>
    </InfoHeaderWrapper>
  );
};

export default ChannelInfomationHeader;
