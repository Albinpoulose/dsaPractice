// Basic stack implementation.

class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, cant perform pop";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty, cant perform peek";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
  print(){
    return this.stack
  }
}

const stack = new Stack();

stack.push(10);
stack.push(11);
stack.push(13);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.print());
