// Basic queue implimentaion.

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, Can not perform operation";
    }
    this.queue.shift();
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  display() {
    return this.queue;
  }
}

obj = new Queue();
obj.enqueue(10);
obj.enqueue(6);
obj.enqueue(66);
obj.enqueue(78);
obj.enqueue(234);
console.log(obj.display());
obj.dequeue();
obj.dequeue();
console.log(obj.peek());
console.log(obj.display());
console.log(obj.size());

// console.log(obj.display());
