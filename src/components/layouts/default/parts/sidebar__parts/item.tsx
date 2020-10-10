import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface ConferenceProps {
  href?: string;
  icon?: React.ReactNode;
  now?: boolean;
  time?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const ConferenceComponent: React.FC<ConferenceProps> = props => {
  const LinkItem = (
    <>
      {props.onClick ? (
        <ConferenceWrapper onClick={props.onClick}>
          <div>
            {props.now ? (
              <ConferenceNowCircle>
                <ConferenceCircle>{props.icon}</ConferenceCircle>
              </ConferenceNowCircle>
            ) : (
              <ConferenceCircle>{props.icon}</ConferenceCircle>
            )}
            {(props.now || props.time) && (
              <ConferenceTime now={props.now}>{props.now ? 'NOW' : props.time}</ConferenceTime>
            )}
          </div>
        </ConferenceWrapper>
      ) : (
        <>
          <ConferenceWrapper>
            <div>
              {props.now ? (
                <ConferenceNowCircle>
                  <ConferenceCircle>{props.icon}</ConferenceCircle>
                </ConferenceNowCircle>
              ) : (
                <ConferenceCircle>{props.icon}</ConferenceCircle>
              )}
              {(props.now || props.time) && (
                <ConferenceTime now={props.now}>{props.now ? 'NOW' : props.time}</ConferenceTime>
              )}
            </div>
          </ConferenceWrapper>
        </>
      )}
    </>
  );

  return (
    <>
      {props.href ? (
        <Link href={props.href} passHref>
          {LinkItem}
        </Link>
      ) : (
        <>{LinkItem}</>
      )}
    </>
  );
};

export default ConferenceComponent;

const ConferenceWrapper = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ConferenceTime = styled.span`
  display: inline-block;
  line-height: 1.5;
  width: 44px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--primary);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
  ${(props: { now?: boolean }) =>
    props.now &&
    `
    color: var(--primary);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-image: linear-gradient(144deg, #fffdd6 -4%, #b2fb5c 46%, var(--green) 77%);
  `}
`;

const ConferenceCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background: var(--white);
  color: var(--primary);
`;

const ConferenceNowCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(138deg, #fffdd6 9%, #b2fb5c 58%, var(--green) 88%);
  border-radius: 50%;
`;
