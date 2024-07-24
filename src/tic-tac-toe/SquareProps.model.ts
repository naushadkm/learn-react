import { MouseEvent } from "react";

export interface SquareProps {
  value: number;
  // onSquareClick: Function;
  onSquareClick: MouseEvent<HTMLButtonElement, MouseEvent>;
}
