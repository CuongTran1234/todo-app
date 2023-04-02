import * as React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  title: string;
  children?: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ title, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export default Column;
