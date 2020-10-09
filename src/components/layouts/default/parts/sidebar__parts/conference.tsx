import React from 'react';
import styled from '@emotion/styled';

interface ConferenceProps {
  now?: boolean;
  time?: string;
}

const ConferenceComponent: React.FC<ConferenceProps> = () => {
  const ConferenceWrapper = styled.div``;
  const ConferenceCircle = styled.div`
    width: 54px;
    height: 54px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: var(--white);
    color: var(--primary);
  `;
  const ConferenceTime = styled.div`
    width: 44px;
    height: 20px;
    border-radius: 4px;
    background-color: var(--primary);
    color: #fff;
  `;
  return (
    <ConferenceWrapper>
      <ConferenceCircle></ConferenceCircle>
      <ConferenceTime>12:12</ConferenceTime>
    </ConferenceWrapper>
  );
};

export default ConferenceComponent;
