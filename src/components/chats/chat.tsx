import React from 'react';
import styled from '@emotion/styled';
import ProfilePicture from '../ProfilePicture';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface ChatComponentProps {
  nickname: string;
  time: string;
  content: string | React.ReactNode;
  photo: string;
}

const ChatComponent: React.FC<ChatComponentProps> = React.memo(props => {
  return (
    <ChatWrapper>
      <ProfilePicture src={props.photo} width="36px" height="36px" />
      <div>
        <div>
          <ChatNickname>{props.nickname}</ChatNickname>
          <ChatTime>{dayjs(props.time).format('A HH:mm')}</ChatTime>
        </div>
        <ChatContent>{props.content}</ChatContent>
      </div>
    </ChatWrapper>
  );
});

const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 36px auto;
  grid-column-gap: 10px;
  padding: 14px 18px;
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

export default ChatComponent;
