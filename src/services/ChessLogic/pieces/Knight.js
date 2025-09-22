import Piece from './Piece';

export default class Knight extends Piece {
    constructor(color, board) {
        super(color, board);
    }

    squaresToGo(row, col) {
        const possiblePlaces = [];
        const dirs = [
            [-2, -1], [-2, 1], [-1, 2], [1, 2],
            [2, 1], [2, -1], [1, -2], [-1, -2],
        ];
        for (let dir of dirs) {
            const r = row + dir[0], c = col + dir[1];
            if (r < 0 || r >= 8 || c < 0 || c >= 8) continue;
            const piece = this.getPiece(r, c);
            if (piece) {
                if (piece.color === this.color || piece.name === "King") continue;
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
}
