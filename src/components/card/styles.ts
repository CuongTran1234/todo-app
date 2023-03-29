import styled from "styled-components";
import Constants from "../../constants";

export const CardContainer = styled.div`
  background-color: ${Constants.COLOR.WHITE};
  border-radius: 16px;
  cursor: pointer;
  padding: 16px;
  max-width: 286px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  margin-top: 24px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${Constants.COLOR.DARK_GREY};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${Constants.COLOR.DARK_GREY};
`;

export const CardAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
`;

export const CardDate = styled.span`
  font-size: 12px;
  color: ${Constants.COLOR.DARK_GREY};
`;