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
  if (col > GRID.length || row > GRID[0].length) {
    return false;
  }
  return GRID[row][col];
}

function isRock(coord) {
  return lightCell(coord) === '^';
}

function isCurrent(coord) {
  return lightCell(coord) === '~';
}

function lightRow(row) {
  return GRID[row - 1];
}

function lightColumn(column) {
  const columnArray = [];
  GRID.forEach((row) => {
    columnArray.push(row[convertColumn(column)]);
  });
  return columnArray;
}

console.log(lightColumn('C'));

// expect ["", "v", "", "", "", "", "", "~", "", ""]
