import React from 'react';
import styled from '@emotion/styled';

import HeaderSearch from './search';
import Alarm from '@/components/icons/alarm';
import { useAuth } from '@/context/AuthContext';

const HeaderComponent: React.FC = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 38px;
    background: var(--primary);
    padding: 0 15px;
  `;

  const SearchSection = styled.div`
    display: flex;
    align-items: center;
    .icon-alarm {
      cursor: pointer;
      margin-right: 14px;
    }
  `;

  // Clickable Section
  const UserSection = styled.div`
    position: relative;
    height: 30px;
  `;

  const UserProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;

  const UserProfileBadge = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    &.active {
      background: #14ff00;
    }
  `;

  const { user } = useAuth();

  return (
    <HeaderWrapper>
      <div></div>
      <SearchSection>
        <Alarm />
        <HeaderSearch />
      </SearchSection>
      <div>
        <UserSection>
          <UserProfilePicture src={user?.photo || 'https://via.placeholder.com/150'} />
          <UserProfileBadge className="active" />
        </UserSection>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
