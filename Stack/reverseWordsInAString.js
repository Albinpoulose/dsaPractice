/**
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

https://leetcode.com/problems/reverse-words-in-a-string/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const word = s.split(" ");
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== "") str += word[i] + " ";
  }
  return str.trim();
};

console.log(reverseWords("a good   example"));
