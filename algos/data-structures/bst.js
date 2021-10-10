class Node {
  constructor(value) {
    this.value = value;
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
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value === value) return undefined;
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(value) {
    if (!this.root) {
      return undefined;
    } else {
      let currentNode = this.root;
      let found = false;
      while (currentNode && !found) {
        if (value === currentNode.value) found = true;

        if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }
        }
      }
      if (found) {return currentNode;} else {return undefined;}
    }
  }
}

const bt = new BinarySearchTree();
bt.insert(10);
bt.insert(5);
bt.insert(13);
bt.insert(11);
bt.insert(2);
bt.insert(6);
bt.insert(20);
// bt.find(8);
// console.log(bt.bfs())
console.log(bt);
// console.log(bt.dfsPreOrder()); // [10, 6 ,3 , 8, 15, 20] - head is in the beginning
// console.log(bt.dfsPostOrder()); // [3, 8, 6, 20, 15, 10] - head is in the end
// console.log(bt.dfsInOrder()); // [3, 6, 8, 10, 15, 20] - head is in the center



class BinarySearchTreeTasks {

  isValidBST2 (root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;

    let val = root.val;

    if (val <= lower || val >= upper) return false;

    return this.isValidBST2(root.left, lower, val) && this.isValidBST(root.right, val, upper)
  };

  kthSmallest (root, k) {
    let stack = [];
    let count = 0;
    let node = root;

    while (true) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        if (stack.length === 0) break;
        node = stack.pop();
        count += 1;
        if (count === k) return node.value;
        node = node.right;
      }
    }
  }
}


var a = new BinarySearchTreeTasks();
