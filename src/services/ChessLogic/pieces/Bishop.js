import Piece from './Piece';

export default class Bishop extends Piece {
    constructor(color, board) {
        super(color, board);
    }

    squaresToGo(row, col) {
        const possiblePlaces = [];
        // left diagonal - up(row--, col--), down(r++, col++)
        for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
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

        for (let r = row + 1, c = col + 1; r < 8 && c < 8; r++, c++) {
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

        // right diagonal - up(row--, col++), down(r++, col--)
        for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
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

        for (let r = row + 1, c = col - 1; r < 8 && c >= 0; r++, c--) {
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
