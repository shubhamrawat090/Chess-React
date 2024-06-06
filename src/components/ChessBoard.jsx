/* eslint-disable react/prop-types */
import { useState } from "react";
import ChessCell from "./ChessCell";
import "./chess-style.css";
import { cn } from "../services/utilityFunctions";

const ChessBoard = ({ game }) => {
  const eightByEightBoard = Array.from({ length: 8 }, () =>
    Array(8).fill(null)
  );
  const [clickedPiece, setClickedPiece] = useState(null);
  const [possibleSquares, setPossibleSquares] = useState([]);

  const clearClickedPiece = () => {
    setClickedPiece(null);
    setPossibleSquares([]);
  };

  const handlePieceClick = (piece) => {
    setClickedPiece(piece);
    // Get the possible squares
    setPossibleSquares(game.squaresToGo(piece));

    // if (clickedPiece && clickedPiece.color === piece.color) {
    //   // If the clicked piece is of the same color as the previously clicked piece
    //   setClickedPiece(piece);
    //   setPossibleSquares(game.squaresToGo(piece));
    // } else {
    //   // If the clicked piece is of the opposite color or no piece was previously clicked
    //   setClickedPiece(piece);
    //   setPossibleSquares(game.squaresToGo(piece));
    // }
  };

  const handlePieceMove = (x, y) => {
    if (
      clickedPiece &&
      possibleSquares.some((square) => square[0] === x && square[1] === y)
    ) {
      game.movePieceTo(clickedPiece, x, y);
      setClickedPiece(null);
      setPossibleSquares([]);
    }
  };

  return (
    <div className="chess-board">
      {eightByEightBoard.map((row, rowIdx) => (
        <div key={"row-" + rowIdx} className="row">
          {row.map((col, colIdx) => (
            <div
              key={rowIdx + "-" + colIdx}
              className={cn(
                `col ${(rowIdx + colIdx) % 2 !== 0 ? "black" : "white"}`
              )}
            >
              <ChessCell
                rowIdx={rowIdx}
                colIdx={colIdx}
                game={game}
                clickedPiece={clickedPiece}
                handlePieceClick={handlePieceClick}
                handlePieceMove={handlePieceMove}
                clearClickedPiece={clearClickedPiece}
                possibleSquares={possibleSquares}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
