export function inputValue(row, col, val) {
  //console.log('inputValue tiklandi gardas!!');
  return {
    type: 'INPUT',
    row : row,
    col: col,
    val: val
  };
}

export function solve() {
  console.log('solve tiklandi gardas!!');
  return {
    type: 'SOLVE'
  };
}

export function clear() {
  console.log('clear tiklandi ulee!!!');
  return {
    type: 'CLEAR'
  };
}

export function check() {
  console.log('check tiklandi!!!');
  return {
    type: 'CHECK'
  };
}
