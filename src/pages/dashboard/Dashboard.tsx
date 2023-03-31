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
    const boardIndex = boards.findIndex((item: Boards) => item.id === boardId);
    if (boardIndex < 0) return;

    const boardList = [...boards];
    boardList[boardIndex].cards.push({
      id: Helper.uuid(),
      name: card.name,
      createdAt: card.createdAt.split("-").join("/"),
      description: card.description,
    });

    setBoards(boardList);
    setShowModal(false);
  };

  const updateCard = (boardId: number, card: Cards) => {
    console.log(boardId);
    const boardIndex = boards.findIndex((item: Boards) => item.id === boardId);
    if (boardIndex < 0) return;

    const boardList = [...boards];
    const cardList = boardList[boardIndex].cards;

    console.log(cardList);

    const cardIndex = cardList.findIndex((item: Cards) => item.id === card.id);
    if (cardIndex < 0) return;

    boardList[boardIndex].cards[cardIndex] = card;
    setBoards(boardList);
  };

  const removeCard = (boardId: number, cardId: string) => {
    const boardIndex = boards.findIndex((item: Boards) => item.id === boardId);
    if (boardIndex < 0) return;

    const boardList = [...boards];
    const cards = boardList[boardIndex].cards;

    const cardIndex = cards.findIndex((item: Cards) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
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
          submitCard={addCardHandler}
        />
      )}
      <AppHeader onClick={() => setShowModal(true)}></AppHeader>
      <AppMain>
        {boards.map((item) => (
          <Board
            updateCard={updateCard}
            removeCard={removeCard}
            key={item.id}
            board={item}
          />
        ))}
      </AppMain>
    </AppContainer>
  );
};

export default Dashboard;
