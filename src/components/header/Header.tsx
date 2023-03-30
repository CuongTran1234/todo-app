import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import { HeaderContainer, HeadingTitle } from "./styles";

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeadingTitle>{t("board.task")}</HeadingTitle>
      <Button type="button" varient="primary" onClick={onClick}>
        {t("board.addTask")}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
