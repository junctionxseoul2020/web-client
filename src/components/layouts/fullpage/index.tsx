import { NextPage } from 'next';
import React from 'react';
import styled from '@emotion/styled';

interface FullpageLayoutProps {
  bgImage?: string;
}

const FullpageLayout: NextPage<FullpageLayoutProps> = ({ children }, props) => {
  return (
    <FullpageLayoutWrapper img={props.bgImage}>
      <ContentWrapper>
        <LogoWrapper>
          <Logo>@work</Logo>
        </LogoWrapper>
        <ContentBox>{children}</ContentBox>
        <FooterWrapper>
          <FooterLink>Privacy & Link</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterWrapper>
      </ContentWrapper>
    </FullpageLayoutWrapper>
  );
};

const FullpageLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props: { img?: string }) => props.img || '/imgs/login_background.png'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  display: block;
  z-index: 150;
`;

const LogoWrapper = styled.div``;

const Logo = styled.h1`
  color: var(--primary);
  font-size: 55px;
  font-weight: 500;
  text-align: center;
  line-height: 63px;
  margin-bottom: 70px;
`;

const ContentBox = styled.div``;

const FooterWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #484848;
  font-size: 15px;
  margin: 0 16px;
`;

export default FullpageLayout;
