import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeadLinkItem: React.FC<{ href?: string; fontWeight?: string }> = ({
  href,
  children,
  fontWeight,
}) => {
  const Item = styled.a`
    color: var(--dark);
    display: block;
    padding: 7px 16px;
    font-size: 15px;
    font-weight: ${fontWeight || 'bold'};
    cursor: pointer;
  `;
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Item>{children}</Item>
        </Link>
      ) : (
        <Item>{children}</Item>
      )}
    </>
  );
};

export default HeadLinkItem;
