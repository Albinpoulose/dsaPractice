// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) start = middle + 1;
    else end = middle - 1;
    console.log(start, end);
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 13));
