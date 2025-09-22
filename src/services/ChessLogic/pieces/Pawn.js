import Piece from './Piece';

export default class Pawn extends Piece {
    constructor(color, board) {
        super(color, board);
    }

    squaresToGo(row, col) {
        const possiblePlaces = [];
        let diagonalDirs = [];
        if (this.color === "white") {
            diagonalDirs = [[-1, -1], [-1, 1]];

            const oneStepElement = this.getPiece(row - 1, col);
            if (!oneStepElement) {
                if (row - 1 >= 0) possiblePlaces.push([row - 1, col]);

                const twoStepElement = this.getPiece(row - 2, col);
                if (row === 6 && !twoStepElement) {
                    possiblePlaces.push([row - 2, col]);
                }
            }
        } else {
            diagonalDirs = [[1, -1], [1, 1]];

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
            const newRow = row + dir[0], newCol = col + dir[1];
            const piece = this.getPiece(newRow, newCol);
            if (piece && piece.color !== this.color) {
                possiblePlaces.push([newRow, newCol]);
            }
        });
        return possiblePlaces;
    }
}
