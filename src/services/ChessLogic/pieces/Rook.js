import Piece from './Piece';

export default class Rook extends Piece {
    constructor(color, board) {
        super(color, board);
    }

    squaresToGo(row, col) {
        const possiblePlaces = [];

        // Vertically all places -> row++
        for (let r = row + 1, c = col; r < 8; r++) {
            const piece = this.getPiece(r, c);
            if (piece) {
                if (this.color === piece.color) break;
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
                if (this.color === piece.color) break;
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
                if (this.color === piece.color) break;
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
                if (this.color === piece.color) break;
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
}
