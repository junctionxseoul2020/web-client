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
}

export const useModal = (): useModalInterface => {
  const [modal, setModal] = useRecoilState(modalState);

  return {
    modal,
    setModal,
  };
};
