/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    https://leetcode.com/problems/valid-parentheses/description/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // check if length is an odd number. if it is, return false
  // if there is an odd number, it means that at least one bracket is missing a pair
  if (s.length % 2 !== 0) return false;

  // if the first element is a closing bracket, it doesn't matter what follows
  // it will never have a pair
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

  // same goes for last element, we are just dealing with opening bracket
  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "{" ||
    s[s.length - 1] === "["
  )
    return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (stack.pop() !== s[i]) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
