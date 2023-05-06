export type Tag = string;

export interface IDate {
  date: Date;
  description: string;
  tags: Tag[];
}

interface IDatesState {
  dates: IDate[];
  tags: Tag[];
}

export interface IDatesContextDate {
  state: IDatesState;
}
