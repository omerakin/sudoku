import { cloneDeep } from 'lodash';

const correct = '1,2,3,4,5,6,7,8,9';
let solvedBoard;

export function solveBoard(board) {
  solveSudoku(board, 0, 0);
  return solvedBoard;
}

export function checkBoard(originalBoard, initialBoardboard) {
  solveSudoku(initialBoardboard, 0, 0);
  return compareBoard(solvedBoard, originalBoard);
}

export function validBoard(board) {
  return (checkRow(board) && checkCol(board) && checkGrid(board));
}

function compareBoard(solvedBoard, originalBoard) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if((solvedBoard[row][col] !== originalBoard[row][col]) && (originalBoard[row][col] !== 0))
        return false;
    }
  }
  return true;
}

function checkRow(board) {
  let tempBoard = cloneDeep(board);
  let valid = true;
  tempBoard.forEach(function(row) {
    if (row.sort().toString() !== correct) {
      valid = false;
    }
  });
  return valid;
}

function checkCol(board) {
  let colArray = [[],[],[],[],[],[],[],[],[]];
  board.forEach(function(row, rowIndex){
    row.forEach(function(number, colIndex){
      colArray[colIndex][rowIndex] = number;
    });
  });
  return checkRow(colArray);
}

function checkGrid(board) {
  let gridArray = [[],[],[],[],[],[],[],[],[]];
  for(let row=0; row<9; row++){
    for(let col=0; col<9; col++){
      let gridRow = Math.floor(row/3);
      let gridCol = Math.floor(col/3);
      let gridIndex = gridRow * 3 + gridCol;
      gridArray[gridIndex].push(board[row][col]);
    }
  }
  return checkRow(gridArray);
}

////////////////////////////////////////

function solveSudoku(board, row, col) {
    let grid = cloneDeep(board);
    let cell = findNextZero(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no zero cell
    if (row === -1) {
        solvedBoard = cloneDeep(grid);
        return true;
    }

    for (let num = 1; num <= 9; num++) {
        if ( noConflicts(grid, row, col, num) ) {
            grid[row][col] = num;
            if ( solveSudoku(grid, row, col) ) {
                return true;
            }
            grid[row][col] = 0;
        }
    }
    return false;
}

function findNextZero(grid, row, col) {
  for (; row < 9; row++)
      for (col = 0; col < 9 ; col++)
          if (grid[row][col] === 0)
              return [row, col];
  return [-1, -1];
}

function noConflicts(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
    for (let col = 0; col < 9; col++)
        if (grid[row][col] === num)
            return false;
    return true;
}

function isColOk(grid, col, num) {
    for (let row = 0; row < 9; row++)
    if (grid[row][col] === num)
        return false;
    return true;
}

function isBoxOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3; c++)
            if (grid[row + r][col + c] === num)
                return false;
    return true;
}
