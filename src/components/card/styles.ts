import styled from "styled-components";
import Constants from "../../constants";
import { User } from "react-feather";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Constants.COLOR.WHITE};
  border-radius: 16px;
  cursor: pointer;
  padding: 16px;
  max-width: 286px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  margin-top: 24px;
  height: 206px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${Constants.COLOR.DARK_GREY};
  display: flex;
  flex: 1 0 auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${Constants.COLOR.DARK_GREY};
`;

export const CardAvatar = styled(User)`
  width: 24px;
  height: 24px;
  color: ${Constants.COLOR.WARNING};
  border: 2px solid currentColor;
  border-radius: 24px;
`;

export const CardDate = styled.span`
  font-size: 12px;
  color: ${Constants.COLOR.DARK_GREY};
`;
