import React from "react";
import { Cards } from "../../models/board";
import {
  CardAvatar,
  CardContainer,
  CardDate,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./styles";

interface CardProps {
  card: Cards;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <CardContainer>
      <CardTitle>{card.name}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
      <CardFooter>
        <CardAvatar />
        <CardDate>{card.createdAt}</CardDate>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
