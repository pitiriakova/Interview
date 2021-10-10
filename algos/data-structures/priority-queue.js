// is based on binary heap, usually min (low values is a highest priority)

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp(node)

    return this.values;
  }

  bubbleUp(node) {
    // take index of inserted element
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while(idx > 0) {
      // find parent index: (idx - 1) / 2
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if(element.priority >= parent.priority) break;

      // compare priorities
      // [ element, parent ] = [ parent, element ]
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    // const min = this.value
  }

  sinkDown() {

  }
}

let pq = new PriorityQueue();
pq.enqueue('ttt', 5);
pq.enqueue('ttt', 4);
pq.enqueue('ttt', 8);
pq.enqueue('ttt', 1);
pq.enqueue('ttt', 1);
pq.enqueue('ttt', 2);
console.log(pq.enqueue('ttt', 1));
