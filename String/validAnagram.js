// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if ((s.length = !t.length)) return false;
  newS = s.split("").sort().join("");
  newt = t.split("").sort().join("");
  return newS === newt;
};

console.log(isAnagram("rat", "car"));
