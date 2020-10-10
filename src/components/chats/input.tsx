import React from 'react';
import styled from '@emotion/styled';
import SendIcon from '../icons/send';

const ChatInputComponent: React.FC = () => {
  const InputWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 18px;
  `;
  const InputSection = styled.div`
    position: relative;ㄴ
  `;
  const Input = styled.textarea`
    width: 100%;
    border-radius: 4px;
    border: solid 1px var(--grey);
    padding: 10px;
    font-size: 15px;
    font-family: inherit;
    line-height: 24px;
    resize: none;
    &::placeholder {
      color: var(--grey);
      font-size: 15px;
    }
  `;
  const SendButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 12px 16px;
    outline: none;
    background: transparent;
    border: 0;
    cursor: pointer;
  `;

  return (
    <InputWrapper>
      <InputSection>
        <Input placeholder="Message #channel_here"></Input>
        <SendButton>
          <SendIcon />
        </SendButton>
      </InputSection>
    </InputWrapper>
  );
};

export default ChatInputComponent;
