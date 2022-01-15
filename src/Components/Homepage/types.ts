export interface CardComponent {
  setInitialPrice: (price: number) => void;
  setActualPrice: (price: number) => void;
  months: number;
  tubes: number;
  actualPrice: number;
  price: number;
  selected: boolean;
  setSelected: (selected: boolean) => void;
  popular: boolean;
  best: boolean;
  saved: number;
}