import React from 'react';
import styled from '@emotion/styled';

interface ChatComponentProps {
  nickname: string;
  time: string;
  content: string | React.ReactNode;
}

const ChatComponent: React.FC<ChatComponentProps> = React.memo(props => {
  const ChatWrapper = styled.div`
    display: grid;
    grid-template-columns: 36px auto;
    grid-column-gap: 10px;
    padding: 14px 18px;
  `;

  const ChatProfileImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  `;

  const ChatNickname = styled.span`
    color: var(--dark);
    font-size: 15px;
    font-weight: 600;
  `;
  const ChatTime = styled.span`
    color: var(--grey);
    font-size: 12px;
    font-weight: 400;
    margin-left: 14px;
  `;
  const ChatContent = styled.div`
    font-size: 15px;
    line-height: 1.6;
    color: var(--dark);
    margin-top: 4px;
  `;

  return (
    <ChatWrapper>
      <ChatProfileImg src="https://via.placeholder.com/150" />
      <div>
        <div>
          <ChatNickname>{props.nickname}</ChatNickname>
          <ChatTime>{props.time}</ChatTime>
        </div>
        <ChatContent>{props.content}</ChatContent>
      </div>
    </ChatWrapper>
  );
});

export default ChatComponent;
