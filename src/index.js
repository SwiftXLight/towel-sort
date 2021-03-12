module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
      return [];
  }

  let tempArr = [];

  for (let i = 0; i < matrix.length; i++) {
      (i % 2) != 0 ? matrix[i].reverse() : matrix[i];

      for(let j = 0; j < matrix[i].length; j++) {
        tempArr.push(matrix[i][j]);
      }
  }

  return tempArr;
}
