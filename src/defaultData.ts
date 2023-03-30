import { Boards } from "./models/board";
import Helpers from "./utils";

const DataBoard: Boards[] = [
  {
    id: 1,
    title: "Todo",
    cards: [
      {
        id: Helpers.uuid(),
        name: "The standard Lorem",
        createdAt: "2023/03/12",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
      {
        id: Helpers.uuid(),
        name: "The standard Lorem 2",
        createdAt: "2023/03/11",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
      {
        id: Helpers.uuid(),
        name: "The standard Lorem 3",
        createdAt: "2023/03/15",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
    ],
  },
  {
    id: 2,
    title: "In progress",
    cards: [
      {
        id: Helpers.uuid(),
        name: "Bonorum et Malorum",
        createdAt: "2023/03/14",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
    ],
  },
  {
    id: 3,
    title: "Done",
    cards: [
      {
        id: Helpers.uuid(),
        name: "On the other hand",
        createdAt: "2023/03/10",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
    ],
  },
  {
    id: 4,
    title: "Archived",
    cards: [],
  },
];

export default DataBoard;
