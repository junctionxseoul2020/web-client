import React from 'react';
import styled from '@emotion/styled';

const ChannelInfomationHeader: React.FC = () => {
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

  return (
    <InfoHeaderWrapper>
      <div>
        <ChannelName>#channel_name</ChannelName>
        <ChannelDesc>Add a topic</ChannelDesc>
      </div>
      <div>asd</div>
    </InfoHeaderWrapper>
  );
};

export default ChannelInfomationHeader;
