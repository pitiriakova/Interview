class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end (tail), remove from beginning (head)

  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
      return null;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    } else {
      const temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = temp.next;
      this.size--;
      return temp.value;
    }
  }
}
