import React from 'react';
import styled from '@emotion/styled';

const Sidebar: React.FC = () => {
  const SidebarWrapper = styled.div`
    width: 100%;
    border-right: 1px solid #e0e2ea;
  `;
  const TitleSection = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid #e0e2ea;
    padding: 0 16px;
  `;
  const Title = styled.span`
    font-size: 15px;
    font-weight: 700;
  `;

  return (
    <SidebarWrapper>
      <TitleSection>
        <Title>JunctionX Seoul 2020</Title>
      </TitleSection>
    </SidebarWrapper>
  );
};

export default Sidebar;
