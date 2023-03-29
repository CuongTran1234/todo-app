import React from "react";
import {
  CardAvatar,
  CardContainer,
  CardDate,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./styles";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <CardAvatar src="https://cdn.dribbble.com/userupload/3123396/file/original-9662aaed482b555fa6ff30897654fe6f.png?compress=1&resize=400x300&vertical=top" />
        <CardDate>2023/12/12</CardDate>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
