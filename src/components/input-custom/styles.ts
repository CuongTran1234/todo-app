import styled from "styled-components";
import Constants from "../../constants";

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const InputForm = styled.input`
  border: 2px solid ${Constants.COLOR.GREY};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  padding: 6px;
  font-weight: 500;
  color: ${Constants.COLOR.GREY};
  &::placeholder {
    color: ${Constants.COLOR.DARK_GREY};
  }
`;

export const InputFooter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const InputShowForm = styled.p`
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${Constants.COLOR.DARK_GREY};
  color: ${Constants.COLOR.WHITE};
  cursor: pointer;
`;
