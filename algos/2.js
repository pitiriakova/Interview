function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let max = {node: nums[0], index: 0};
  let leftPrefix = [];
  let rightPrefix = [];

  function findMax(arr) {
    if (arr.length === 0) return null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].val > max.val) {
        max.node = arr[i];
        max.index = i;
      }
    }

    return max;
  }

  max = findMax(nums);
  leftPrefix = nums.slice(0, max.index);
  rightPrefix = nums.slice(max.index, nums.length);

  function constructTree(arr, max) {
    console.log(max)
    if (arr.length === 0) return null;

    const leftMax = findMax(arr);
    leftPrefix = leftPrefix.slice(0, leftMax.index);

    const rightMax = findMax(rightPrefix)
    rightPrefix = rightPrefix.slice(rightMax.index, rightPrefix.length);

    max.node.left = constructTree(
      leftPrefix,
      leftMax
    )

    max.node.right = constructTree(
      rightPrefix,
      rightMax
    );

    return max;
  }

  return constructTree(leftPrefix, rightPrefix, max)
};

// [3,2,1,6,0,5]
// lp [3,2] m = 1 rp = [6,0,5]
//
