import React, { useRef } from "react";
import styld from "styled-components";

export interface ModalProps {
  openModal: (val: boolean) => void;
}

const Wrapper = styld.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,0.5);
`;

const Block = styld.div`
    position: relative;
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 30px;
`;

const Close = styld.span`
    position: absolute;
    top: 10px;
    left: 95%;
    cursor: pointer;
`;

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef();

  return (
    <Wrapper
      onClick={(e) => {
        if (e.target === modalRef.current) return;
        props.openModal(false);
      }}
    >
      <Block ref={modalRef}>
        <Close
          onClick={() => {
            props.openModal(false);
          }}
        >
          X
        </Close>
        Modal
      </Block>
    </Wrapper>
  );
};

export default Modal;
