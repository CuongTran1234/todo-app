export interface Tasks {
  id: string;
  text: string;
}

export interface Cards {
  id: string;
  name: string;
  createdAt: string;
  description: string;
  tasks: Tasks[];
}

export interface Boards {
  id: number;
  title: string;
  cards: Cards[];
}
