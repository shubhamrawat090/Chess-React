import ChessLogicModel from "./ChessLogic.model";
import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';

export class ChessLogic {
  constructor() {
    this.board = this.initializeBoard();
    this.playerToPlay = "white";
    this.movesHistory = [];
    this.pieceInstances = {
        Bishop: (color, board) => new Bishop(color, board),
        King: (color, board) => new King(color, board),
        Knight: (color, board) => new Knight(color, board),
        Pawn: (color, board) => new Pawn(color, board),
        Queen: (color, board) => new Queen(color, board),
        Rook: (color, board) => new Rook(color, board),
    };
  }

  initializeBoard() {
    return ChessLogicModel.CHESS_BOARD;
  }

  getPiece(rowIdx, colIdx) {
    return this.board.find((item) => item.x === rowIdx && item.y === colIdx);
  }

  squaresToGo(piece) {
    const { name, x: row, y: col, color } = piece;

    if (this.pieceInstances[name]) {
        const pieceInstance = this.pieceInstances[name](color, this.board);
        return pieceInstance.squaresToGo(row, col);
    }

    return [];
  }

  movePieceTo(piece, x, y) {
    const index = this.board.findIndex(
      (p) => p.x === piece.x && p.y === piece.y
    );
    if (index !== -1) {
      this.board[index].x = x;
      this.board[index].y = y;
    }
  }
}
