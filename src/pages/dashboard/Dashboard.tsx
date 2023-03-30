import React, { useEffect, useState } from "react";
import CardDetail from "../../components/card-detail/CardDetail";
import AppHeader from "../../components/header/Header";
import { AppContainer, AppMain } from "./styles";
import DataBoard from "../../defaultData";
import Board from "../../components/board/Board";
import { Boards, Cards } from "../../models/board";
import Helper from "../../utils";

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [boards, setBoards] = useState<Boards[]>([]);
  const [boardDefault, setBoardDefault] = useState<number>(0);

  const addCardHandler = (boardId: number, card: Cards) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const boardList = [...boards];
    boardList[boardIndex].cards.push({
      id: Helper.uuid(),
      name: card.name,
      createdAt: card.createdAt,
      description: card.description,
    });

    setBoards(boardList);
  };

  useEffect(() => {
    setBoards(DataBoard);
    setBoardDefault(DataBoard[0].id);
  }, []);

  return (
    <AppContainer>
      {showModal && (
        <CardDetail
          boardId={boardDefault}
          onClose={() => setShowModal(false)}
          addCard={addCardHandler}
        />
      )}
      <AppHeader onClick={() => setShowModal(true)}></AppHeader>
      <AppMain>
        {boards.map((item) => (
          <Board key={item.id} board={item} />
        ))}
      </AppMain>
    </AppContainer>
  );
};

export default Dashboard;
