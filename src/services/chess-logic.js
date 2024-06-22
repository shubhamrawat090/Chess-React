/* eslint-disable no-case-declarations */
import { PIECES } from "../constants/chessboard";

export class ChessLogic {
  constructor() {
    this.board = this.initializeBoard();
    this.playerToPlay = "white";
    this.movesHistory = [];
  }

  initializeBoard() {
    return [
      // black row 1
      { name: "Rook", type: "R", x: 0, y: 0, color: "black", icon: PIECES.br },
      {
        name: "Knight",
        type: "N",
        x: 0,
        y: 1,
        color: "black",
        icon: PIECES.bn,
      },
      {
        name: "Bishop",
        type: "B",
        x: 0,
        y: 2,
        color: "black",
        icon: PIECES.bb,
      },
      { name: "Queen", type: "Q", x: 0, y: 3, color: "black", icon: PIECES.bq },
      { name: "King", type: "K", x: 0, y: 4, color: "black", icon: PIECES.bk },
      {
        name: "Bishop",
        type: "B",
        x: 0,
        y: 5,
        color: "black",
        icon: PIECES.bb,
      },
      {
        name: "Knight",
        type: "N",
        x: 0,
        y: 6,
        color: "black",
        icon: PIECES.bn,
      },
      { name: "Rook", type: "R", x: 0, y: 7, color: "black", icon: PIECES.br },
      // black row 2
      { name: "Pawn", type: "P", x: 1, y: 0, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 1, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 2, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 3, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 4, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 5, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 6, color: "black", icon: PIECES.bp },
      { name: "Pawn", type: "P", x: 1, y: 7, color: "black", icon: PIECES.bp },
      // white row 1
      { name: "Rook", type: "R", x: 7, y: 0, color: "white", icon: PIECES.wr },
      {
        name: "Knight",
        type: "N",
        x: 7,
        y: 1,
        color: "white",
        icon: PIECES.wn,
      },
      {
        name: "Bishop",
        type: "B",
        x: 7,
        y: 2,
        color: "white",
        icon: PIECES.wb,
      },
      { name: "Queen", type: "Q", x: 4, y: 3, color: "white", icon: PIECES.wq },
      { name: "King", type: "K", x: 7, y: 4, color: "white", icon: PIECES.wk },
      {
        name: "Bishop",
        type: "B",
        x: 7,
        y: 5,
        color: "white",
        icon: PIECES.wb,
      },
      {
        name: "Knight",
        type: "N",
        x: 7,
        y: 6,
        color: "white",
        icon: PIECES.wn,
      },
      { name: "Rook", type: "R", x: 7, y: 7, color: "white", icon: PIECES.wr },
      // white row 2
      { name: "Pawn", type: "P", x: 6, y: 0, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 1, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 2, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 3, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 4, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 5, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 6, color: "white", icon: PIECES.wp },
      { name: "Pawn", type: "P", x: 6, y: 7, color: "white", icon: PIECES.wp },
    ];
  }

  getPiece(rowIdx, colIdx) {
    return this.board.find((item) => item.x === rowIdx && item.y === colIdx);
  }

  squaresToGo(piece) {
    const { name, x: row, y: col, color } = piece;

    switch (name) {
      case "Pawn":
        return this.pawnSquares(row, col, color);

      case "Rook":
        return this.rookSquares(row, col, color);

      case "Bishop":
        return this.bishopSquares(row, col, color);

      case "Knight":
        return this.knightSquares(row, col, color);

      case "Queen":
        return this.queenSquares(row, col, color);

      case "King":
        return this.kingSquares(row, col, color);

      default:
        return [];
    }
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

  bishopSquares(row, col, color) {
    const possiblePlaces = [];
    // left diagonal - up(row--, col--), down(r++, col++)
    for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
      const piece = this.getPiece(r, c);
      if (piece) {
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    for (let r = row + 1, c = col + 1; r < 8 && c < 8; r++, c++) {
      const piece = this.getPiece(r, c);
      if (piece) {
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    // right diagonal - up(row--, col++), down(r++, col--)
    for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
      const piece = this.getPiece(r, c);
      if (piece) {
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    for (let r = row + 1, c = col - 1; r < 8 && c >= 0; r++, c--) {
      const piece = this.getPiece(r, c);
      if (piece) {
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }
    return possiblePlaces;
  }

  rookSquares(row, col, color) {
    const possiblePlaces = [];

    // Vertically all places -> row++
    for (let r = row + 1, c = col; r < 8; r++) {
      const piece = this.getPiece(r, c);
      if (piece) {
        // Stop here as well - BUT FOR OUR PIECE, FOR OPPONENT PIECE consider it and nothing else
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    for (let r = row - 1, c = col; r >= 0; r--) {
      const piece = this.getPiece(r, c);
      if (piece) {
        // Stop here as well - BUT FOR OUR PIECE, FOR OPPONENT PIECE consider it and nothing else
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    // Horizontally all places -> col++
    for (let c = col + 1, r = row; c < 8; c++) {
      const piece = this.getPiece(r, c);
      if (piece) {
        // Stop here as well - BUT FOR OUR PIECE, FOR OPPONENT PIECE consider it and nothing else
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    for (let c = col - 1, r = row; c >= 0; c--) {
      const piece = this.getPiece(r, c);
      if (piece) {
        // Stop here as well - BUT FOR OUR PIECE, FOR OPPONENT PIECE consider it and nothing else
        if (color === piece.color) break;
        else {
          possiblePlaces.push([r, c]);
          break;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }

    return possiblePlaces;
  }

  knightSquares(row, col, color) {
    const possiblePlaces = [];
    const dirs = [
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
    ];
    for (let dir of dirs) {
      const r = row + dir[0],
        c = col + dir[1];
      if (r < 0 || r >= 8 || c < 0 || c >= 8) break;
      const piece = this.getPiece(r, c);
      if (piece) {
        // NOTE: Piece shouldn't be king - cannot attack it
        // ALSO CHECK FOR SQUARES ATTACKED BY OTHER PIECES

        if (piece.color === color) continue;
        else {
          possiblePlaces.push([r, c]);
          continue;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }
    return possiblePlaces;
  }

  kingSquares(row, col, color) {
    const possiblePlaces = [];
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
    for (let dir of dirs) {
      const r = row + dir[0],
        c = col + dir[1];
      if (r < 0 || r >= 8 || c < 0 || c >= 8) break;
      const piece = this.getPiece(r, c);
      if (piece) {
        // NOTE: Piece shouldn't be king - cannot attack it
        // ALSO CHECK FOR SQUARES ATTACKED BY OTHER PIECES

        if (piece.color === color) continue;
        else {
          possiblePlaces.push([r, c]);
          continue;
        }
      } else {
        possiblePlaces.push([r, c]);
      }
    }
    return possiblePlaces;
  }

  pawnSquares(row, col, color) {
    const possiblePlaces = [];
    // NOTE: If there is an OPPONENT piece at diagonal then you can go there as well
    // NOTE: can go 1 or 2 step only if there is not piece there
    let diagonalDirs = [];
    if (color === "white") {
      // WHITE goes UPWARDS
      diagonalDirs = [
        [-1, -1],
        [-1, 1],
      ];

      const oneStepElement = this.getPiece(row - 1, col);
      if (!oneStepElement) {
        if (row - 1 >= 0) possiblePlaces.push([row - 1, col]);

        const twoStepElement = this.getPiece(row - 2, col);
        if (row === 6 && !twoStepElement) {
          possiblePlaces.push([row - 2, col]);
        }
      }
    } else {
      // BLACK goes DOWNWARDS
      diagonalDirs = [
        [1, -1],
        [1, 1],
      ];

      const oneStepElement = this.getPiece(row + 1, col);
      if (!oneStepElement) {
        if (row + 1 <= 7) possiblePlaces.push([row + 1, col]);

        const twoStepElement = this.getPiece(row + 2, col);
        if (row === 1 && !twoStepElement) {
          possiblePlaces.push([row + 2, col]);
        }
      }
    }

    diagonalDirs.forEach((dir) => {
      console.log(dir);
      const newRow = row + dir[0],
        newCol = col + dir[1];
      const piece = this.getPiece(newRow, newCol);
      if (piece && piece.color !== color) {
        possiblePlaces.push([newRow, newCol]);
      }
    });
    return possiblePlaces;
  }

  queenSquares(row, col, color) {
    // [[0, 1] [1, 2]] find unique elements in these types of array
    const bishopSq = this.bishopSquares(row, col, color);
    const rookSq = this.rookSquares(row, col, color);
    const uniqueSet = new Set();
    const uniqueValues = [];
    bishopSq.forEach((rowCol) => {
      const uniqueKey = rowCol[0] + "-" + rowCol[1];
      if (!uniqueSet.has(uniqueKey)) {
        uniqueValues.push(rowCol);
      }
      uniqueSet.add(uniqueKey);
    });
    rookSq.forEach((rowCol) => {
      const uniqueKey = rowCol[0] + "-" + rowCol[1];
      if (!uniqueSet.has(uniqueKey)) {
        uniqueValues.push(rowCol);
      }
      uniqueSet.add(uniqueKey);
    });
    return uniqueValues;
  }
}
