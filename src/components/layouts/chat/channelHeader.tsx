import React from 'react';
import styled from '@emotion/styled';
import { User } from '@/context/AuthContext';
import UserAdd from '@/components/icons/user-add';
import InfoIcon from '@/components/icons/info';
import ProfilePicture from '@/components/ProfilePicture';

const ChannelInfomationHeader: React.FC<{ name: string; members: User[]; desc?: string }> = ({
  name,
  members,
  desc,
}) => {
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

  return (
    <InfoHeaderWrapper>
      <div>
        <ChannelName>{name}</ChannelName>
        <ChannelDesc>{desc || 'Add a topic'}</ChannelDesc>
      </div>
      <RightSide>
        <UserProfileBox>
          {members &&
            members.map(user => (
              <ProfilePicture
                src={user.photo || 'https://via.placeholder.com/150'}
                width="26px"
                height="26px"
              />
            ))}
          <UserCount>{members?.length}</UserCount>
        </UserProfileBox>
        <UserAdd />
        <InfoIcon />
      </RightSide>
    </InfoHeaderWrapper>
  );
};

export default ChannelInfomationHeader;
