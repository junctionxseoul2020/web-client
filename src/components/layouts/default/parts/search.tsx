import React from 'react';
import styled from '@emotion/styled';
import SearchIcon from '@/components/icons/search';

const HeaderSearch: React.FC = () => {
  // 실제로 작동하지 않는 form 같은 것 만들어 놓음.
  const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 24px;
    border-radius: 6px;
    background-color: var(--white);
    cursor: pointer;
  `;

  const Placeholder = styled.span`
    color: #030303;
    font-size: 13px;
    margin-left: 4px;
  `;

  return (
    <>
      <InputWrapper>
        <SearchIcon />
        <Placeholder>Search</Placeholder>
      </InputWrapper>
    </>
  );
};

export default HeaderSearch;
