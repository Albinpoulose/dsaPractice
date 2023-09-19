/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length === this.size) return false;
  this.queue.push(value);
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.size;
};


 var obj = new MyCircularQueue(3)
 var param_1 = obj.enQueue(4)
 var param_1 = obj.enQueue(5)
 var param_1 = obj.enQueue(6)
 var param_1 = obj.enQueue(7)
 console.log(obj.enQueue(8));
 console.log(obj.queue);
 var param_2 = obj.deQueue()
  console.log(obj.queue);
 console.log(obj.Front());
 console.log(obj.Rear());
 console.log(obj.isEmpty());
 console.log(obj.isFull());
 
