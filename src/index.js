module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  let tempArr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
      tempArr.push(matrix[i][columnIdx]);
    }
  }

  return tempArr;
}
