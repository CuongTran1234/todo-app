import * as React from "react";
import AppButton from "./styles";

interface DataProps {
  varient: "primary" | "warning" | "default" | "success";
  type: "button" | "submit";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<DataProps> = ({ type, varient, children, onClick }) => {
  return (
    <AppButton type={type} varient={varient} onClick={onClick}>
      {children}
    </AppButton>
  );
};

export default Button;
