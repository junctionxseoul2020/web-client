import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select'; // https://react-select.com/

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const AddConferenceModal: React.FC = () => {
  return (
    <ModalContentWrapper>
      <ModalTitle>Create conference</ModalTitle>
      <ModalFormWrapper>
        <ModalFormLabel>conference title</ModalFormLabel>
        <ModalFormInput placeholder="conference title, name" />
      </ModalFormWrapper>
      <ModalFormWrapper>
        <ModalFormLabel>type name of person</ModalFormLabel>
        <ModalSelectModifier>
          <Select
            options={options}
            isMulti={true}
            placeholder="Choose person"
            className="customSelect"
          />
        </ModalSelectModifier>
      </ModalFormWrapper>
      <ModalFormWrapper>
        <ModalFormGrid55>
          <div>
            <ModalFormLabel>Date</ModalFormLabel>
            <ModalFormInput placeholder="Select date" type="date" />
          </div>
          <div>
            <ModalFormLabel>Time</ModalFormLabel>
            <ModalFormInput placeholder="Select time" type="time" />
          </div>
        </ModalFormGrid55>
      </ModalFormWrapper>
      <ModalFormWrapper>
        <ModalFormLabel>conference link</ModalFormLabel>
        <ModalFormInput placeholder="link for virtual meeting" />
      </ModalFormWrapper>
      <ModalFormWrapper>
        <ModalFormLabel>description</ModalFormLabel>
        <ModalFormTextarea placeholder="Conference description" />
      </ModalFormWrapper>
      <div>
        <ModalButton>Create</ModalButton>
      </div>
    </ModalContentWrapper>
  );
};

const ModalContentWrapper = styled.div`
  padding: 30px 36px;
`;

const ModalTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.24;
  color: #707070;
  margin-top: 6px;
  margin-bottom: 40px;
`;

const ModalFormWrapper = styled.div`
  margin-bottom: 25px;
`;

const ModalFormLabel = styled.label`
  display: block;
  font-size: 16px;
  color: #707070;
  margin-bottom: 5px;
`;

const ModalFormInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  display: block;
  border-radius: 4px;
  border: solid 1px #cbcbcb;
  outline-color: #6e2eff;
  --webkit-appearance: none;
  font-size: 16px;
  &::placeholder {
    color: #707070;
    font-size: 16px;
  }
`;

const ModalFormTextarea = styled.textarea`
  width: 100%;
  padding: 5px 10px;
  display: block;
  border-radius: 4px;
  border: solid 1px #cbcbcb;
  font-size: 16px;
  outline-color: #6e2eff;
  --webkit-appearance: none;
  resize: none;
  &::placeholder {
    color: #707070;
    font-size: 16px;
  }
`;

const ModalFormGrid55 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 13px;
`;

const ModalButton = styled.button`
  outline-color: #6e2eff;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 40px;
  border-radius: 3px;
  background-color: #6e2eff;
  ${props => props.disabled && `background-color: #848484;`}
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin-left: auto;
  margin-top: 10px;
  cursor: pointer;
`;

const ModalSelectModifier = styled.div`
  .customSelect {
  }
`;

export default AddConferenceModal;
