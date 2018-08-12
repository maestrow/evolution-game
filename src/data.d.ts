export interface IBadge {
  id: string;
  caption: string;
}

export interface ICard {
  id: string;
  set: string;
  categories: string[];
  caption: string;
  description: string;
}

declare const sets: IBadge[];
declare const categories: IBadge[];
declare const cards: ICard[];

export interface IData {
  sets: IBadge[];
  categories: IBadge[];
  cards: ICard[];
}

export declare const data: IData; 
