import styled, { css } from "styled-components";
import { Calendar, CheckSquare, List, Type, Repeat } from "react-feather";
import Constants from "../../constants";

const baseInputIcon = css`
  font-size: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const CardDetailContainer = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-bottom: 48px;
`;

export const CardDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
`;

export const CardDetailTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CardDetaiTitleIcon = styled(Type)`
  ${baseInputIcon}
`;

export const CardDetailTitleText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${Constants.COLOR.DARK_GREEN};
  text-transform: capitalize;
`;

export const CardDetailDescriptionIcon = styled(List)`
  ${baseInputIcon}
`;

export const CardDetailDateIcon = styled(Calendar)`
  ${baseInputIcon}
`;

export const CardDetailStatusIcon = styled(Repeat)`
  ${baseInputIcon}
`;

export const CardDetailTaskIcon = styled(CheckSquare)`
  ${baseInputIcon}
`;

export const CardDateInput = styled.input`
  max-width: 200px;
  border: 2px solid ${Constants.COLOR.DARK_GREY};
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 14px;
`;

export const CardSelectForm = styled.select`
  border: 1px solid ${Constants.COLOR.DARK_GREY};
  padding: 10px;
`;

export const CardSelectOption = styled.option`
  font-size: 14px;
  border: none;
  width: 100%;
  background-color: ${Constants.COLOR.WHITE};
`;

export const ErrorValidation = styled.p`
  color: ${Constants.COLOR.DARD_RED};
  font-size: 14px;
`;

export const TaskItemList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  row-gap: 8px;
`;

export const TaskItem = styled.li`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
