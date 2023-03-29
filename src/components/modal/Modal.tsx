import * as React from "react";
import Button from "../button/Button";
import { ModalContainer, ModalContent, ModalFooter } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <ModalFooter>
          <Button type="success">Save</Button>
          <Button type="warning">Delete</Button>
          <Button type="default">Close</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
