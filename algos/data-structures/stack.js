class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return this.size++;
  }

  // TODO
  // pop() {
  //   if (!this.first) {
  //     return null;
  //   }
  //
  //   const temp = this.first;
  //   if (this.first === this.last) {
  //     this.last = null;
  //   }
  // }
}
