import Piece from './Piece';
import Bishop from './Bishop';
import Rook from './Rook';

export default class Queen extends Piece {
    constructor(color, board) {
        super(color, board);
        this.bishop = new Bishop(color, board);
        this.rook = new Rook(color, board);
    }

    squaresToGo(row, col) {
        const bishopSq = this.bishop.squaresToGo(row, col);
        const rookSq = this.rook.squaresToGo(row, col);
        
        const uniqueSet = new Set();
        const uniqueValues = [];
        bishopSq.forEach((rowCol) => {
            const uniqueKey = rowCol[0] + "-" + rowCol[1];
            if (!uniqueSet.has(uniqueKey)) {
                uniqueValues.push(rowCol);
                uniqueSet.add(uniqueKey);
            }
        });
        rookSq.forEach((rowCol) => {
            const uniqueKey = rowCol[0] + "-" + rowCol[1];
            if (!uniqueSet.has(uniqueKey)) {
                uniqueValues.push(rowCol);
                uniqueSet.add(uniqueKey);
            }
        });
        return uniqueValues;
    }
}
