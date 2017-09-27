import { cloneDeep } from 'lodash';
import { checkBoard, solveBoard } from '../utils/code';

const initialBoards = [[
  [8, 0, 0, 7, 9, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 8, 0, 3],
  [0, 9, 6, 1, 0, 8, 5, 0, 0],
  [0, 7, 0, 0, 8, 5, 2, 1, 0],
  [4, 8, 2, 9, 0, 6, 3, 5, 7],
  [0, 6, 5, 2, 7, 0, 0, 4, 0],
  [0, 0, 1, 3, 0, 7, 6, 8, 0],
  [6, 0, 7, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 2, 9, 0, 0, 1]
],[
  [6, 0, 0, 0, 7, 0, 0, 0, 0],
  [9, 0, 0, 8, 3, 0, 4, 7, 6],
  [0, 8, 7, 0, 2, 6, 0, 0, 0],
  [8, 0, 0, 3, 0, 5, 6, 0, 0],
  [4, 0, 1, 6, 8, 2, 3, 0, 7],
  [0, 0, 3, 7, 0, 4, 0, 0, 8],
  [0, 0, 0, 1, 6, 0, 7, 8, 0],
  [7, 3, 6, 0, 4, 8, 0, 0, 5],
  [0, 0, 0, 0, 5, 0, 0, 0, 3]
],[
  [2, 0, 0, 0, 0, 0, 4, 0, 1],
  [0, 0, 3, 0, 4, 8, 0, 0, 6],
  [0, 0, 0, 1, 0, 3, 2, 0, 0],
  [8, 7, 0, 0, 2, 4, 0, 9, 3],
  [9, 4, 6, 7, 0, 1, 5, 8, 2],
  [3, 2, 0, 9, 8, 0, 0, 4, 7],
  [0, 0, 2, 3, 0, 5, 0, 0, 0],
  [1, 0, 0, 4, 6, 0, 8, 0, 0],
  [5, 0, 7, 0, 0, 0, 0, 0, 4]
]];

const initialBoard = initialBoards[Math.floor(Math.random() * 3)];

// it is still on the devoping process
export default function (state = initialBoard, action) {
  switch (action.type) {
    case 'INPUT':
      let {row, col, val} = action;
      // let updatedRow = state[row];
      // updatedRow.splice(col,1,val);
      // state.splice(row,1,updatedRow);
      // console.log('-------');
      // console.log(updatedRow);
      // console.log('-------');
      // console.log(state);
      // console.log('-------');

      let updatedRow = [
				...state[row].slice(0, col),
				val,
				...state[row].slice(col + 1)
			];
      return [
				...state.slice(0, row),
				updatedRow,
				...state.slice(row + 1)
			];
    case 'CLEAR':
      state = cloneDeep(initialBoard);
      return state;
    case 'SOLVE':
      let tempBoard1 = cloneDeep(initialBoard);
      state = solveBoard(tempBoard1);
      return state;
    case 'CHECK':
      let tempBoard2 = cloneDeep(state);
      let tempBoard3 = cloneDeep(initialBoard);
      if (checkBoard(tempBoard2, tempBoard3)) {
        alert('This Sudoku is solvable, keep going !!');
      } else {
        alert('This Sudoku is NOT solvable');
      }
      return state;
    default:
      return state;
  }
}
