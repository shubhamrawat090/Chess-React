/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { cn } from "../services/utilityFunctions";
import ShowRowColIndex from "./debugging/ShowRowColIndex";

const ChessCell = ({
  rowIdx,
  colIdx,
  game,
  clickedPiece,
  handlePieceClick,
  handlePieceMove,
  clearClickedPiece,
  possibleSquares,
}) => {
  const [piece, setPiece] = useState(null);
  const [isPossibleSquare, setIsPossibleSquare] = useState(false);

  const isAPossibleSquare = (rowIdx, colIdx) => {
    if (!possibleSquares || possibleSquares.length === 0 || !clickedPiece) {
      setIsPossibleSquare(false);
      return;
    }
    const result = possibleSquares.some(
      (square) => square[0] === rowIdx && square[1] === colIdx
    )
      ? setIsPossibleSquare(true)
      : setIsPossibleSquare(false);

    return result;
  };

  useEffect(() => {
    isAPossibleSquare(rowIdx, colIdx);
  });

  useEffect(() => {
    const pieceToPlace = game.getPiece(rowIdx, colIdx);
    setPiece(pieceToPlace);
  }, [rowIdx, colIdx, game]);

  const handleClick = () => {
    if (piece) {
      if (clickedPiece) {
        if (piece.x === clickedPiece.x && piece.y === clickedPiece.y) {
          // If there is a clicked piece already and we clicked again on it then do nothing
          return;
        } else {
          // Clicked on another piece
          // Check if it is not the same color piece - WE CAN'T CUT OUR OWN PIECE
          // For a different color piece we can cut it
        }
      } else {
        handlePieceClick(piece);
      }
    }
  };

  return (
    <button
      className={cn(
        "chess-cell",
        `${piece ? "piece " + piece.color : "cell"}`,
        `${piece === clickedPiece ? "clicked" : ""}`,
        `${isPossibleSquare ? "possibleSquare" : ""}`
      )}
      onClick={handleClick}
      onBlur={clearClickedPiece}
    >
      {piece && <img className="icon" src={piece.icon} alt={piece.type} />}

      {/* DEBUGGING CODE - Show block numbers */}
      {/* <ShowRowColIndex rowIdx={rowIdx} colIdx={colIdx} /> */}
    </button>
  );
};

export default ChessCell;
