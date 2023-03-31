import React, { useState } from "react";
import { Cards } from "../../models/board";
import {
  CardAvatar,
  CardContainer,
  CardDate,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./styles";
import CardDetail from "../card-detail/CardDetail";

interface CardProps {
  boardId: number;
  card: Cards;
  updateCard: (boardId: number, card: Cards) => void;
  removeCard: (boardId: number, cardId: string) => void;
}

const Card: React.FC<CardProps> = ({
  card,
  boardId,
  updateCard,
  removeCard,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onUpdateCard = (idBoard: number, cardItem: Cards) => {
    updateCard(idBoard, cardItem);
    setShowModal(false);
  };

  const onRemoveCard = (idBoard: number, idCard: string) => {
    removeCard(idBoard, idCard);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CardDetail
          boardId={boardId}
          card={card}
          onClose={() => setShowModal(false)}
          submitCard={onUpdateCard}
          removeCard={onRemoveCard}
        />
      )}
      <CardContainer onClick={() => setShowModal(true)}>
        <CardTitle>{card.name}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
        <CardFooter>
          <CardAvatar />
          <CardDate>{card.createdAt}</CardDate>
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;
