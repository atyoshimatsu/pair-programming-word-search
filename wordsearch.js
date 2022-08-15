const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const reversedHorizontalJoin = horizontalJoin.map(s => s.split('').reverse().join(''));
  const diagonllyJoin = letters.map((ls, index) => ls[index]).join('');

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of reversedHorizontalJoin) {
    if (l.includes(word)) return true;
  }

  if (diagonllyJoin.includes(word)) return true;

  return false;
};

module.exports = wordSearch;


const transpose = function(matrix) {
  const transposed = [];
  // c: column
  for (let c = 0; c < matrix[0].length; c++) {
    transposed.push([]);
    // r: row
    for (let r = 0; r < matrix.length; r++) {
      transposed[c].push(matrix[r][c]);
    }
  }

  return transposed;
};
