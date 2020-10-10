import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ChannelItem: React.FC<{ href: string; active?: boolean }> = props => {
  const router = useRouter();
  const ChannelLinkItem = styled.a`
    display: flex;
    padding: 4px 22px;
    color: var(--dark);
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    ${(props.active || router.asPath === props.href) &&
    `
      background: var(--primary);
      color: #fff;
    `}
  `;
  const ChannelSharpBox = styled.div`
    text-align: center;
    width: 20px;
    height: 20px;
    color: var(--dark);
    border-radius: 4px;
    background: #dee2eb;
    margin-right: 10px;
    ${(props.active || router.asPath === props.href) &&
    `
      background: var(--primary);
      color: #fff;
    `}
  `;
  return (
    <Link href={props.href} passHref>
      <ChannelLinkItem>
        <ChannelSharpBox>#</ChannelSharpBox>
        {props.children}
      </ChannelLinkItem>
    </Link>
  );
};

export default ChannelItem;
