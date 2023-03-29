import styled from "styled-components";
import Constants from "../../constants";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${Constants.COLOR.GREY};
`;
