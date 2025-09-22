import { PIECES } from "../../constants/chessboard";

class ChessLogicModel {
  CHESS_BOARD = [
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
    { name: "Queen", type: "Q", x: 7, y: 3, color: "white", icon: PIECES.wq },
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

export default new ChessLogicModel();
