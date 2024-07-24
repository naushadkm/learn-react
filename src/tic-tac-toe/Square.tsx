// import { SquareProps } from "./SquareProps.model";

// function Square({ value, onSquareClick }: Readonly<SquareProps>) {
function Square({ value, onSquareClick }: any) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
