class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return newNode;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = this.head.next;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
        this.head = null;
      }
      return current;
    }
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.value)
      current = current.next;
    }
  }

  /** SINGLY LINKED LIST 2 **/
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  /** SINGLY LINKED LIST 3 **/
  insert(index, value) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      const newItem = this.shift(value);
      if (newItem) {
        return true;
      }
    }
    if (index === this.length) {
      const newItem = this.push(value);
      if (newItem) {
        return true;
      }
    }
    const previousNode = this.get(index - 1);
    const temp = previousNode.next;
    const newNode = new Node(index, value);
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      const removedItem = this.shift();
      if (removedItem) {
        return true;
      }
    }
    if (index === this.length) {
      const newItem = this.pop();
      if (newItem) {
        return true;
      }
    }
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head; this.head = this.tail; this.tail = node;
    let next = node.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var first = new Node('1st item');
var second = new Node("2nd item")
var third = new Node("3rd item")

var list = new SinglyLinkedList();
list.push(first);
list.push(second);
list.push(third);

// list.unshift('val');
// list.set(0, 'yoyoyo');
// list.insert(1, 'yoyoyo');
console.log('&&&&&&')
console.log(list.remove(1))

// console.log('list: ', list);



// const list = new SinglyLinkedList()
// list.push(111);
// list.push(222);
// list.unshift(55);
// console.log('list****')
// console.log(list)



