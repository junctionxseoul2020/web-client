import React from 'react';
import styled from '@emotion/styled';

const ChatSeperator = React.memo(() => {
  return (
    <SepWrapper>
      <Line />
      <InfoBox>Friday, October 9th</InfoBox>
    </SepWrapper>
  );
});

const SepWrapper = styled.div`
  position: relative;
  height: 30px;
  margin-top: 20px;
`;
const Line = styled.hr`
  border-top: 1px solid #e0e2ea;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
const InfoBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 155px;
  height: 30px;
  border-radius: 15px;
  border: solid 1px #e0e2ea;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #030303;
`;
export default ChatSeperator;
