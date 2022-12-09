import React from 'react';
import styled from 'styled-components';
import ModalInitial, { ModalProps } from 'react-overlays/Modal';

interface StyledModalProps extends ModalProps {
  isOpen?: boolean;
}
const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;
const StyledModal = styled(ModalInitial)<ModalProps>`
  position: fixed;
  z-index: 1040;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 20px;
`;

export default function Modal({ isOpen = false, children }: StyledModalProps): JSX.Element {
  const renderBackdrop = (props: any) => <Backdrop {...props} />;
  return (
    <StyledModal show={isOpen} renderBackdrop={renderBackdrop} aria-labelledby="modal-label">
      {children}
    </StyledModal>
  );
}
