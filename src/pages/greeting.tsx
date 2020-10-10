import React from 'react';
import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import { requestAPI } from '@/utils/APIUtil';
import { Channel } from '@/pages/channel/[slug]';
import Chat from '@/components/layouts/chat';
import { User } from '@/context/AuthContext';

const GreetingContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GreetingContent = styled.div`
  width: 280px;
`;

const GreetingMyWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
`;
const GreetingTeamGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
`;

const GreetingImgWrapper = styled.div<{ width?: string; height?: string }>`
  border-radius: 50%;
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '150px'};
  background-color: var(--white);
  overflow: hidden;
  margin: 0 auto;
`;
const GreetingImg = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
`;

const GreetingMyTitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #707070;
  margin-bottom: 8px;
`;
const GreetingMyDescription = styled.p`
  font-size: 13px;
  color: #b9b9b9;
`;
const GreetingTeamItem = styled.div`
  width: 100%;
  text-align: center;
`;
const GreetingTeamSubText = styled.span`
  display: block;
  margin-top: 10px;
  color: #707070;
  font-size: 12px;
  line-height: 15px;
  .sub {
    color: #b9b9b9;
    display: block;
  }
`;

const GreetingPage: NextPage<{ users: User[]; channels: Channel[] }> = ({ users, channels }) => {
  return (
    <Chat name="JunctionX Seoul 2020" memberCount={users.length || 0} channels={channels}>
      <HeaderContainer>
        <h1>Welcome to JunctionX Seoul 2020</h1>
      </HeaderContainer>
      <GreetingContentWrapper>
        <GreetingContent>
          <GreetingMyWrapper>
            <GreetingImgWrapper width="165px" height="165px">
              <GreetingImg src="https://via.placeholder.com/500" />
            </GreetingImgWrapper>
            <GreetingMyTitle>
              <b>Nalong</b>, welcome to JunctionX Seoul 2020
            </GreetingMyTitle>
            <GreetingMyDescription>Team Zerohouse / design team</GreetingMyDescription>
          </GreetingMyWrapper>
          <GreetingTeamGrid>
            <GreetingTeamItem>
              <GreetingImgWrapper width="80px" height="80px">
                <GreetingImg src="https://via.placeholder.com/200" />
              </GreetingImgWrapper>
              <GreetingTeamSubText>
                User
                <span className="sub">design team</span>
              </GreetingTeamSubText>
            </GreetingTeamItem>
            <GreetingTeamItem>
              <GreetingImgWrapper width="80px" height="80px">
                <GreetingImg src="https://via.placeholder.com/200" />
              </GreetingImgWrapper>
              <GreetingTeamSubText>
                User
                <span className="sub">design team</span>
              </GreetingTeamSubText>
            </GreetingTeamItem>
            <GreetingTeamItem>
              <GreetingImgWrapper width="80px" height="80px">
                <GreetingImg src="https://via.placeholder.com/200" />
              </GreetingImgWrapper>
              <GreetingTeamSubText>
                User
                <span className="sub">design team</span>
              </GreetingTeamSubText>
            </GreetingTeamItem>
          </GreetingTeamGrid>
        </GreetingContent>
      </GreetingContentWrapper>
    </Chat>
  );
};

const HeaderContainer = styled.div`
  padding: 42px 18px;
  h1 {
    color: #313131;
    font-size: 28px;
    line-height: 33px;
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const users = await requestAPI<User[]>('/user/list', { workspaceId: 1 });
  console.log(users);
  const channels = await requestAPI<Channel[]>('/channel/list', { workspaceId: 1 });
  return { props: { users, channels } };
};

export default GreetingPage;
