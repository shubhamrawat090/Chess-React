export default class Piece {
    constructor(color, board) {
        this.color = color;
        this.board = board;
    }

    getPiece(rowIdx, colIdx) {
        return this.board.find((item) => item.x === rowIdx && item.y === colIdx);
    }

    squaresToGo(row, col) {
        throw new Error("Method 'squaresToGo()' must be implemented.");
    }
}
