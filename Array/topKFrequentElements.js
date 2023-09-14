// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  result = {};
  arr = [];
  s = [];
  ans = []
  for (const n of nums) {
    if (result[n]) result[n] += 1;
    else result[n] = 1;
  }
   for (let el in result) {
     arr.push([el, result[el]]);
   }
   arr = arr.sort((a, b) => b[1] - a[1]);
   for (let j = 0; j < k; j++) {
     ans.push(parseInt(arr[j][0]));
   }
  return ans;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
