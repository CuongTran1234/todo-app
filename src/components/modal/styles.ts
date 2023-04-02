import styled from "styled-components";
import Constants from "../../constants";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 90vh;
  background-color: ${Constants.COLOR.WHITE};
  border-radius: 4px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  padding: 32px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
`;
