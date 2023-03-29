import * as React from "react";
import AppButton from "./styles";

interface DataProps {
  type: "primary" | "warning" | "default" | "success";
  children?: React.ReactNode;
}

const Button: React.FC<DataProps> = ({ type, children }) => {
  return <AppButton varient={type}>{children}</AppButton>;
};

export default Button;
