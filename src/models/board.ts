export interface Cards {
  id: string;
  name: string;
  createdAt: string;
  description: string;
}

export interface Boards {
  id: number;
  title: string;
  cards: Cards[];
}
