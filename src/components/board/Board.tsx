import React from "react";
import { Boards } from "../../models/board";
import Card from "../card/Card";
import Column from "../column/Column";
import { BoardContainer } from "./styles";

interface BoardProps {
  board: Boards;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <BoardContainer>
      <Column title={board.title}>
        {board.cards.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </Column>
    </BoardContainer>
  );
};

export default Board;
