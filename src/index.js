module.exports = function solveSudoku(matrix) {
  //solution using a backtracking algorithm
  function isValidCell(matrix, row, col, val) {
    for (let i = 0; i < 9; i++) {
      // constants for checking cells inside a small box
      const smallBoxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      const smallBoxCol = Math.floor(col / 3) * 3 + i % 3;

      if (matrix[row][i] === val ||
        matrix[i][col] === val ||
        matrix[smallBoxRow][smallBoxCol] === val) return false;
    }
    return true;
  }

  function findEmpty() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          for (let value = 0; value <= 9; value++) {
            if (isValidCell(matrix, i, j, value)) {
              matrix[i][j] = value;
              if (findEmpty()) return matrix
            }
          }
          matrix[i][j] = 0;
          return false;
        }
      }
    }
    return matrix;
  }

  return findEmpty();
}
