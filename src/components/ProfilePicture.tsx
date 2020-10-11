import React from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';

const ProfilePicture: NextPage<{ src: string; width: string; height: string }> = ({
  src,
  width,
  height,
}) => {
  return (
    <ProfilePictureWrapper width={width} height={height}>
      <ProfilePictureImg src={src} />
    </ProfilePictureWrapper>
  );
};

const ProfilePictureWrapper = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
`;

const ProfilePictureImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

export default ProfilePicture;
