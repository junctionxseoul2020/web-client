import React from 'react';
import styled from '@emotion/styled';

const MeetHeader: React.FC = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 180px;
    background-image: url('/imgs/header.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
  const FlexMiddle = styled.div`
    display: flex;
    align-items: center;
  `;

  const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    padding: 0 50px;
  `;
  const Profile = styled.div`
    text-align: center;
    margin-right: 10px;
    width: 73px;
  `;
  const ProfileImgWrapper = styled.div`
    border-radius: 50%;
    width: 73px;
    height: 73px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: var(--white);
    overflow: hidden;
  `;
  const ProfileImg = styled.img`
    max-width: 100%;
    height: auto;
    width: 100%;
  `;
  const ProfileName = styled.p`
    color: var(--primary);
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    word-break: break-word;
  `;

  const ServiceLink = styled.a`
    width: 54px;
    height: 54px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #fafaff;
  `;

  return (
    <HeaderWrapper>
      <HeaderContent>
        <FlexMiddle>
          <Profile>
            <ProfileImgWrapper>
              <ProfileImg src="https://static-zepeto.pstatic.net/assets/42BmTzfkh5wP1sYEdGSwr5#" />
            </ProfileImgWrapper>
            <ProfileName>Hyunsoo Park</ProfileName>
          </Profile>
        </FlexMiddle>
        <FlexMiddle>
          <ServiceLink></ServiceLink>
        </FlexMiddle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default MeetHeader;
