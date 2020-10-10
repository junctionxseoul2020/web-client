import React from 'react';
import styled from '@emotion/styled';

const IntroBox: React.FC<{ title?: string; desc?: string }> = props => {
  const IntroWrapper = styled.div`
    padding: 42px 18px;
    h1 {
      font-size: 28px;
      line-height: 33px;
    }
    p {
      color: var(--primary);
      font-size: 15px;
      margin-top: 18px;
    }
  `;
  return (
    <IntroWrapper>
      <h1>{props.title || '#unknown'}</h1>
      {props.desc && <p>{props.desc}</p>}
    </IntroWrapper>
  );
};

export default IntroBox;
