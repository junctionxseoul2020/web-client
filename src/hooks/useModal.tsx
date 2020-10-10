import { atom, SetterOrUpdater, useRecoilState } from 'recoil';

export enum Modal {
  Close = '',
  AddConference = 'addconference',
}

const modalState = atom({
  key: 'modal',
  default: Modal.Close,
});

interface useModalInterface {
  modal: Modal;
  setModal?: SetterOrUpdater<Modal>;
  openModal: (modal: Modal) => void;
  closeModal: () => void;
}

export const useModal = (): useModalInterface => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = (modal: Modal): void => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(Modal.Close);
  };

  return {
    modal,
    setModal,
    openModal,
    closeModal,
  };
};
