const GRID = [
  ['', '', '', '^', '', '', '', '', '', ''],
  ['', '', 'v', '', '~', '', '', '', '', ''],
  ['', 'v', '', '', '^', '^', '', '', '', ''],
  ['', '', '', '', '^', '^', '', '', '', ''],
  ['', '', '', '', '', '', '', '', 'v', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '^', '~', '~', '', '', '', '^', '', ''],
  ['', '^', '', '~', '~', '', '', '', '', ''],
  ['', '^', '', '', '~', '~', '', '', '', ''],
];

function countRows() {
  return GRID.length;
}

function countColumns() {
  return GRID[0].length;
}

function gridSize() {
  return `${countColumns()} x ${countRows()}`;
}

function totalCells() {
  return countRows() * countColumns();
}

console.log(totalCells());

