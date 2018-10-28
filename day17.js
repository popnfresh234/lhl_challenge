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

function convertNumberToLetter(colNum) {
  return String.fromCharCode(colNum + 97).toUpperCase();
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

function getAll(symbol) {
  const results = [];
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] === symbol) {
        const col = convertNumberToLetter(j);
        results.push(col + (i + 1));
      }
    }
  }
  return results;
}

function allRocks() {
  return getAll('^');
}

function allCurrents() {
  return getAll('~');
}

function allShips() {
  return getAll('v');
}

function firstRock() {
  return allRocks()[0];
}


function shipReport() {
  let ships = allShips();
  ships = ships.sort((ship1, ship2) => convertColumn(ship1) - convertColumn(ship2));
  return [ships[0], ships[ships.length - 1]];
}

console.log(shipReport());
