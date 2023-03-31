import * as React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import { ModalContainer, ModalContent, ModalFooter } from "./styles";

interface ModalProps {
  isDelete?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  onDelete,
  isDelete,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <ModalFooter>
          <Button type="button" varient="success" onClick={onSubmit}>
            {t("board.action.save")}
          </Button>
          {isDelete && (
            <Button type="button" varient="warning" onClick={onDelete}>
              {t("board.action.delete")}
            </Button>
          )}
          <Button type="button" varient="default" onClick={onClose}>
            {t("board.action.close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
