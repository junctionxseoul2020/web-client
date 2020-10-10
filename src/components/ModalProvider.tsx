import React from 'react';
import styled from '@emotion/styled';
import { useModal } from '@/hooks/useModal';

const ModalProvider: React.FC = () => {
  const { modal } = useModal();
  return (
    <>
      {modal !== '' && (
        <ModalBackground>
          <Modal>asd</Modal>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

const Modal = styled.div`
  background: #fff;
  min-width: 534px;
`;

export default ModalProvider;
