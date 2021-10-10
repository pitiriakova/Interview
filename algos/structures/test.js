class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {

      let currentNode = this.root;

      while (true) {
        if (newNode.val === val) return undefined;

       if (newNode.val > currentNode.val) {
         if (currentNode.right === null) {
           currentNode.right = newNode;
           return newNode;
         }
         currentNode = currentNode.right;
       } else {
         if (currentNode.left === null) {
           currentNode.left = newNode;
           return newNode;
         }
         currentNode = currentNode.left;
       }
      }
    }
  }

  traverseInOrder () {
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
  }


  dfs() {
    const queue = [];
    const result = [];
    let node = this.root;
    queue.push(node);

    while(node) {
      node = queue.shift();
      result.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

class Node {
  constructor(v) {
    this.val = v;
    this.left = null;
    this.right = null;
  }
}

