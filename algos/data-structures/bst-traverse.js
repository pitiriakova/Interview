class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTreeTraverseIteratively {
  constructor() {
    this.root = null;
  }
  bfs() {
    let node = this.root;
    const queue = [];
    const data = [];

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push (node.left);
      if (node.right) queue.push (node.right);
    }
    return data;
  }
  dfsPreOrderIterative() {
    const stack = [];
    const result = [];
    stack.push(this.root);

    while(stack.length > 0) {
      let node = stack.pop();

      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return result;
  }
  inOrderTraversalIterative(root) {
    var callStack = [];
    var current = root;
    var result = [];
    while (true) {
      while (!!current) {
        callStack.push(current.value);
        current = current.left;
      }
      if (callStack.length === 0) break;
      var lastCurrent = callStack.pop();
      result.push(lastCurrent);
      current = lastCurrent.right;
    }
    return result;
  }
}

var a = new BinarySearchTreeTraverseIteratively();

const bt = new BinarySearchTree();
bt.insert(10);
bt.insert(6);
bt.insert(15);
bt.insert(3);
bt.insert(8);
bt.insert(20);
// bt.find(8);
// console.log(bt.bfs())
// console.log(bt.kthSmallest(bt.root, 2));
// console.log(bt.dfsPreOrder()); // [10, 6 ,3 , 8, 15, 20] - head is in the beginning
console.log(bt.dfsPostOrder()); // [3, 8, 6, 20, 15, 10] - head is in the end
// console.log(bt.dfsInOrder()); // [3, 6, 8, 10, 15, 20] - head is in the center


class BinarySearchTreeTraverseRecursively {

  dfsPreOrder() {
    // first we visit the left side, then the right side
    const visited = [];
    let node = this.root;

    // RECURSIVELY:
    function traverse(node) {

      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    const visited = [];
    //
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  dfsPostOrder() {
    // the root is the last node to visit
    // for each node we explore all nodes before visiting the node itself
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }
}

var a = new BinarySearchTreeTraverseRecursively();
