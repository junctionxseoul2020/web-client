import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ChannelAdd: React.FC<{ href: string }> = props => {
  const ChannelLinkItem = styled.a`
    display: flex;
    padding: 4px 22px;
    color: var(--dark);
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
  `;
  const ChannelSharpBox = styled.div`
    text-align: center;
    width: 20px;
    height: 20px;
    color: var(--dark);
    border-radius: 4px;
    background: #dee2eb;
    margin-right: 10px;
  `;
  return (
    <Link href={props.href} passHref>
      <ChannelLinkItem>
        <ChannelSharpBox>+</ChannelSharpBox>
        {props.children}
      </ChannelLinkItem>
    </Link>
  );
};

export default ChannelAdd;
