import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
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
  index: number;
  updateCard: (boardIdFrom: number, boardIdTo: number, card: Cards) => void;
  removeCard: (boardId: number, cardId: string) => void;
}

const Card: React.FC<CardProps> = ({
  card,
  boardId,
  index,
  updateCard,
  removeCard,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onUpdateCard = (
    idBoardFrom: number,
    idBoardTo: number,
    cardItem: Cards
  ) => {
    updateCard(idBoardFrom, idBoardTo, cardItem);
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
          updateCard={onUpdateCard}
          removeCard={onRemoveCard}
        />
      )}
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={() => setShowModal(true)}
          >
            <CardTitle>{card.name}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardFooter>
              <CardAvatar />
              <CardDate>{card.createdAt}</CardDate>
            </CardFooter>
          </CardContainer>
        )}
      </Draggable>
    </>
  );
};

export default Card;
