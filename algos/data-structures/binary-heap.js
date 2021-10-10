class MaxBinaryHeap {
  values = [41, 39, 33, 18, 27, 12];
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if(element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {

    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(this.values.length !== 0) {
      let leftChildIndex = idx * 2 + 1; let rightChildIndex = idx * 2 + 2;
      let rightChild = this.values[rightChildIndex]; let leftChild = this.values[leftChildIndex];
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown();
    return max;
  }
}

let heap = new MaxBinaryHeap();
// console.log((heap.insert(55)));
// console.log((heap.insert(45)));
heap.extractMax();
console.log((heap.values));
heap.extractMax();
heap.extractMax();
console.log((heap.values));
heap.extractMax();
heap.extractMax();
console.log((heap.values));
heap.extractMax();
heap.extractMax();
console.log((heap.values));
