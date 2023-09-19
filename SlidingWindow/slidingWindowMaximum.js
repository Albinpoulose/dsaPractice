/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * https://leetcode.com/problems/sliding-window-maximum/description/
 */



// =========================Brute force solution =================================== 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = []
    for (let i = 0; i <= nums.length - k; i++) {
  

     
  }
  return result
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3,3,5,5,6,7]