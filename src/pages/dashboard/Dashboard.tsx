import React, { useEffect, useState } from "react";
import CardDetail from "../../components/card-detail/CardDetail";
import AppHeader from "../../components/header/Header";
import { AppContainer, AppMain } from "./styles";
import DataBoard from "../../defaultData";
import Board from "../../components/board/Board";
import { Boards, Cards } from "../../models/board";
import Helper from "../../utils";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

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
      tasks: card.tasks,
    });

    setBoards(boardList);
    setShowModal(false);
  };

  const updateCard = (boardIdFrom: number, boardIdTo: number, card: Cards) => {
    const boardIndex = boards.findIndex(
      (item: Boards) => item.id === boardIdFrom
    );
    if (boardIndex < 0) return;

    const boardList = [...boards];
    const cardList = boardList[boardIndex].cards;

    const cardIndex = cardList.findIndex((item: Cards) => item.id === card.id);
    if (cardIndex < 0) return;

    if (boardIdFrom !== boardIdTo) {
      const boardIndexTarget = boards.findIndex(
        (item: Boards) => item.id === boardIdTo
      );

      if (boardIndexTarget < 0) return;

      boardList[boardIndexTarget].cards.push(card);
      cardList.splice(cardIndex, 1);
    } else {
      boardList[boardIndex].cards[cardIndex] = card;
    }

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

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const fromBoardIndex = boards.findIndex(
      (item) => item.id === Number(result.source.droppableId)
    );
    if (fromBoardIndex < 0) return;

    const fromCardIndex = boards[fromBoardIndex].cards.findIndex(
      (item) => item.id === result.draggableId
    );
    if (fromCardIndex < 0) return;

    const toBoardIndex = boards.findIndex(
      (item) => item.id === Number(result.destination?.droppableId)
    );
    if (toBoardIndex < 0) return;

    const boardList = [...boards];
    const fromCardItem = boardList[fromBoardIndex].cards[fromCardIndex];
    boardList[fromBoardIndex].cards.splice(fromCardIndex, 1);
    boardList[toBoardIndex].cards.splice(
      result.destination.index,
      0,
      fromCardItem
    );
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list">
          {(provided) => (
            <AppMain ref={provided.innerRef} {...provided.droppableProps}>
              {boards.map((item, index) => (
                <Board
                  updateCard={updateCard}
                  removeCard={removeCard}
                  key={item.id}
                  index={index}
                  board={item}
                />
              ))}
              {provided.placeholder}
            </AppMain>
          )}
        </Droppable>
      </DragDropContext>
    </AppContainer>
  );
};

export default Dashboard;
