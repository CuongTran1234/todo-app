import React from "react";
import Button from "../button/Button";
import { HeaderContainer, HeadingTitle } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeadingTitle>Tasks</HeadingTitle>
      <Button type="primary">Create Task</Button>
    </HeaderContainer>
  );
};

export default Header;
