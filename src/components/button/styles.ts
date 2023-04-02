import styled from "styled-components";
import Constants from "../../constants";

type ButtonProps = {
  varient: "primary" | "warning" | "default" | "success";
};

const AppButton = styled.button`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 8px;
  outline: none;
  height: 44px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props: ButtonProps) => fontColors[props.varient]};
  background-color: ${(props: ButtonProps) => backgroundColors[props.varient]};
  border: ${(props: ButtonProps) => borderColors[props.varient]};
  &:hover {
    background-color: ${(props: ButtonProps) => hoverBgColors[props.varient]};
    border-color: ${(props: ButtonProps) => hoverBorderColors[props.varient]};
    color: ${(props: ButtonProps) => hoverFontColors[props.varient]};
  }
`;

const noneVal = "none";

const fontColors = {
  primary: Constants.COLOR.WHITE,
  warning: Constants.COLOR.WHITE,
  default: Constants.COLOR.WHITE,
  success: Constants.COLOR.WHITE,
};

const backgroundColors = {
  primary: Constants.COLOR.PRIMARY,
  warning: Constants.COLOR.WARNING,
  default: Constants.COLOR.DEFAULT,
  success: Constants.COLOR.SUCCESS,
};

const borderColors = {
  primary: noneVal,
  warning: noneVal,
  default: noneVal,
  success: noneVal,
};

/**
 * Hover color
 */
const hoverBgColors = {
  primary: Constants.COLOR.VIOLET,
  warning: Constants.COLOR.DARD_RED,
  default: Constants.COLOR.BLUE,
  success: Constants.COLOR.GREEN,
};

const hoverBorderColors = {
  primary: noneVal,
  warning: noneVal,
  default: noneVal,
  success: noneVal,
};

const hoverFontColors = {
  primary: Constants.COLOR.WHITE,
  warning: Constants.COLOR.WHITE,
  default: Constants.COLOR.WHITE,
  success: Constants.COLOR.WHITE,
};

export default AppButton;
