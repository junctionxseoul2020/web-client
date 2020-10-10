import React from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

const Loading: NextPage = () => {
  return (
    <LoadingWrapper>
      <Title>Landing to your workspace</Title>
      <Description>Please wait a seconds</Description>
      <BounceLoader
        size={77}
        color={'#313131'}
        css={css`
          margin: 0 auto;
        `}
      />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 40px;
  margin-bottom: 18px;
  color: var(--dark);
`;

const Description = styled.span`
  display: block;
  font-size: 15px;
  margin-bottom: 40px;
  color: var(--dark);
`;

export default Loading;
