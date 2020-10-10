import React from 'react';
import styled from '@emotion/styled';

const UserItem: React.FC<{ nickname: string; picture?: string; desc?: string }> = props => {
  const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
  `;

  const UserPicWrapper = styled.div`
    position: relative;
  `;
  const UserPic = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  `;
  const UserPicBadge = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 6px;
    height: 6px;
    background: #14ff00;
    border-radius: 50%;
  `;

  const UserNickname = styled.div`
    font-size: 15px;
    margin-left: 12px;
    letter-spacing: -0.3px;
    color: #030303;
  `;

  const UserDesc = styled.div`
    font-size: 15px;
    margin-left: 10px;
    letter-spacing: -0.3px;
    color: var(--grey);
  `;
  return (
    <UserWrapper>
      <UserPicWrapper>
        <UserPic src={props.picture || 'https://via.placeholder.com/150'} />
        <UserPicBadge />
      </UserPicWrapper>
      <UserNickname>{props.nickname}</UserNickname>
      {props.desc && <UserDesc>{props.desc}</UserDesc>}
    </UserWrapper>
  );
};

export default UserItem;
