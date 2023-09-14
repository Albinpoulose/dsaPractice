/*
You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

const findTarget = (arr, target) => {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return true;
    else if (target < arr[middle]) end = middle - 1;
    else start = middle + 1;
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log(start, end, middle);
    if (
      target >= matrix[middle][0] &&
      target <= matrix[middle][matrix[middle].length - 1]
    )
      return findTarget(matrix[middle], target);
    else if (target < matrix[middle][0]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    0
  )
);
