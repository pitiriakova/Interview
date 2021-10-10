class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
   this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while(true) {
      if (value === current.val) return undefined;

      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else if (value > current.left) {

        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(value) {
    // if (!this.root) return undefined;
    //
    // let currentNode = this.root;
    // let found = false;
    //
    // while (currentNode && !found) {
    //   if (value === currentNode.value) {
    //     found = true;
    //     return currentNode;
    //   }
    //   if (value > currentNode.value) {
    //     currentNode = currentNode.right;
    //   }
    //   if (value > currentNode.value) {
    //     currentNode = currentNode.left;
    //   }
    // }
  }

  bfs()
  {
    // ITERATIVELY:
    // let node = this.root;
    // const queue = [];
    // const data = [];
    //
    // queue.push(node);
    // while(queue.length) {
    //   node = queue.shift();
    //   data.push(node);
    //   if (node.left) queue.push (node.left);
    //   if (node.right) queue.push (node.right);
    // }

    // RECURSIVELY
    const data = [];
    //
    function traverse(node) {

      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);


    }
    traverse(this.root);
    return data;
  }

  inorder() {
    // left - node - right
    const stack = [];
    const visited = [];
    let currentNode = this.root;
    stack.push(this.root);

    while (currentNode.right) stack.push(currentNode.right);
    while (currentNode.left) stack.push(currentNode.left);

    while(stack.length) {
      stack.shift();

    }
    // while(stack.length) {
    //   stack.shift();
    //
    //   if (currentNode.left)
    // }
  }
}

const bst = new BinarySearchTree();
// bst.insert(10)
// bst.insert(5)
// bst.insert(13)
// bst.insert(11)
// bst.insert(2)
// bst.insert(16)
// bst.insert(7)

bst.insert(5)
bst.insert(11)
bst.insert(6)
console.log(bst)
