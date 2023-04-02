import React from "react";
import { Boards, Cards } from "../../models/board";
import Card from "../card/Card";
import Column from "../column/Column";
import { BoardContainer } from "./styles";
import { Droppable } from "react-beautiful-dnd";
interface BoardProps {
  board: Boards;
  index: number;
  updateCard: (boardIdFrom: number, boardIdTo: number, card: Cards) => void;
  removeCard: (boardId: number, cardId: string) => void;
}

const Board: React.FC<BoardProps> = ({
  board,
  index,
  updateCard,
  removeCard,
}) => {
  return (
    <BoardContainer>
      <Column title={board.title}>
        <Droppable droppableId={`${board.id}`} type="task">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {board.cards.map((item, index) => (
                <Card
                  key={item.id}
                  updateCard={updateCard}
                  removeCard={removeCard}
                  card={item}
                  index={index}
                  boardId={board.id}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Column>
    </BoardContainer>
  );
};

export default Board;
