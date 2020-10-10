import React from 'react';
import styled from '@emotion/styled';

const IntroBox = () => {
  const IntroWrapper = styled.div`
    padding: 42px 18px;
    h1 {
      font-size: 28px;
      line-height: 33px;
      margin: 0;
    }
    p {
      color: var(--primary);
      font-size: 15px;
      margin: 0;
    }
  `;
  return (
    <IntroWrapper>
      <h1>#channel_name</h1>
      <p>asd</p>
    </IntroWrapper>
  );
};

export default IntroBox;
