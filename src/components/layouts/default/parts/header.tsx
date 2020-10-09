import React from 'react';
import styled from '@emotion/styled';

import HeaderSearch from './search';
import Alarm from '@/components/icons/alarm';

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
      margin-right: 14px;
    }
  `;
  const UserSection = styled.div``;

  const UserProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;

  return (
    <HeaderWrapper>
      <div></div>
      <SearchSection>
        <Alarm />
        <HeaderSearch />
      </SearchSection>
      <UserSection>
        <UserProfilePicture src="https://via.placeholder.com/150" />
      </UserSection>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
