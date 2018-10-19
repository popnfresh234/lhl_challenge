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

function convertColumn(coord) {
  const col = coord.slice(0, 1).toLowerCase();
  return col.charCodeAt() - 97;
}

function lightCell(coord) {
  const col = convertColumn(coord);
  const row = coord.slice(coord.length - 1, coord.length) - 1;
  return GRID[row][col];
}

console.log(lightCell('C2'));

