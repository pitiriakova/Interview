class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }
}

/** DOUBLY LINKED LIST 1 **/
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {return undefined;}

    let poppedNode = this.tail;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      this.length--;
      poppedNode.previous = null;
      return poppedNode;
    }
  }





  /** DOUBLY LINKED LIST 2 **/
  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // [oldHead, newHead, node];
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    var count, current;
    if(index <= this.length/2){
      count = 0;
      current = this.head;
      while(count !== index){
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  /** DOUBLY LINKED LIST 3 **/
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true
    } else {return false;}
  }
  insert(index, value) {
    if (index < 0 || index >= this.length || !this.length) {
      return undefined;
    }
    if (index === 0) {
      !!this.unshift(value);
    }
    if (index === this.length - 1) {
      return !!this.push(value);
    }

    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    const newNode = new Node(value);
    beforeNode.next = newNode;
    newNode.previous = beforeNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length || !this.length) {
      return undefined;
    }
    if (index === 0) {
      return !!this.shift();
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }
    const currentNode = this.get(index);
    const previous = currentNode.previous;
    const next = currentNode.next;
    previous.next = next;
    next.previous = previous;
    currentNode.next = null;
    currentNode.previous = null;
    this.length--;
    return currentNode;
  }

}

const list = new DoublyLinkedList()
list.push('Harry');
list.push('Ron');
list.push('Hermione');
// list.unshift('Jinny');
// console.log('before: ', list)
// console.log(list.pop());
list.remove('Ron')
console.log('after: ', list)
