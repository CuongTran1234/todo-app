import React from "react";
import { Boards, Cards } from "../../models/board";
import Card from "../card/Card";
import Column from "../column/Column";
import { BoardContainer } from "./styles";

interface BoardProps {
  board: Boards;
  updateCard: (boardId: number, card: Cards) => void;
  removeCard: (boardId: number, cardId: string) => void;
}

const Board: React.FC<BoardProps> = ({ board, updateCard, removeCard }) => {
  return (
    <BoardContainer>
      <Column title={board.title}>
        {board.cards.map((item) => (
          <Card
            updateCard={updateCard}
            removeCard={removeCard}
            key={item.id}
            card={item}
            boardId={board.id}
          />
        ))}
      </Column>
    </BoardContainer>
  );
};

export default Board;
