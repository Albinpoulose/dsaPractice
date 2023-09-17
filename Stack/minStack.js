/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.
https://leetcode.com/problems/min-stack/description/
 */

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) this.stack.push({ val: val, min: val });
  else if (this.stack[this.stack.length - 1].min < val)
    this.stack.push({ val: val, min: this.stack[this.stack.length - 1].min });
  else this.stack.push({ val: val, min: val });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

//  * Your MinStack object will be instantiated and called as such:
//   Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
// obj.push(90);
console.log("Stack", obj.stack);
obj.pop();
console.log("Stack", obj.stack);
console.log(obj.top());
console.log(obj.getMin());
