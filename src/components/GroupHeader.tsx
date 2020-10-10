import React from 'react';
import styled from '@emotion/styled';
import { User } from '@/context/AuthContext';

export enum GroupHeaderType {
  Lounge,
  Meet,
}

interface GroupHeaderProps {
  backgroundImg?: string;
  users?: Array<User>;
  type: GroupHeaderType;
}

/**
 * Meet, Lounge에 사용되는 헤더 컴포넌트입니다.
 */
const GroupHeader: React.FC<GroupHeaderProps> = props => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <FlexMiddle>
          {props.users && props.users.length > 0 ? (
            <>
              {props.users.map((item, i) => {
                return (
                  <>
                    <Profile key={i}>
                      <ProfileImgWrapper>
                        <ProfileImg src={item.photo} />
                      </ProfileImgWrapper>
                      <ProfileName>{item.name}</ProfileName>
                    </Profile>
                  </>
                );
              })}
            </>
          ) : (
            <>참여자가 아무도 없어요</>
          )}
        </FlexMiddle>
        <FlexMiddle>
          {props.type === GroupHeaderType.Meet && (
            <>
              <ServiceLink>
                <ServiceLinkImg src="/imgs/zoom.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-calender.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-docs.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-presentation.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/dots.png" />
              </ServiceLink>
            </>
          )}
          {props.type === GroupHeaderType.Lounge && (
            <>
              <ServiceLink>
                <ServiceLinkImg src="/imgs/zoom.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-calender.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-docs.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/google-presentation.png" />
              </ServiceLink>
              <ServiceLink>
                <ServiceLinkIconImg src="/imgs/dots.png" />
              </ServiceLink>
            </>
          )}
        </FlexMiddle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fafaff;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  cursor: pointer;
`;

const ServiceLinkIconImg = styled.img`
  width: 28px;
  height: auto;
`;

const ServiceLinkImg = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
`;

export default GroupHeader;
