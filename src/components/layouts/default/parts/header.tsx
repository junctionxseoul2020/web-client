import React from 'react';
import styled from '@emotion/styled';

import HeaderSearch from './search';

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

  const UserSection = styled.div``;

  const UserProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;

  return (
    <HeaderWrapper>
      <div></div>
      <div>
        <HeaderSearch />
      </div>
      <UserSection>
        <UserProfilePicture src="https://via.placeholder.com/150" />
      </UserSection>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
