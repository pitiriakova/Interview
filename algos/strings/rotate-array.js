// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// var a = [1,3,8,2,4,5]; => [4, 5, 1, 3, 8, 2];
// first el to rotate - 4 swap with
// k = 2;
// length = 6

var rotate = function(nums, k) {
  var newArr = [];
  // newArr.length = nums.length;
  if (k === 0 || nums.length < 2) {
    return;
  }

  for (var i = nums.length - k; i < nums.length; i++) {
    newArr.push(nums[i]);
  }

  for (var j = 0; j < nums.length - k; j++) {
    newArr.push(nums[j]);
  }

  return newArr;
};

// rotate([1,3,8,2,4,5], 2);
// console.log(rotate([1,3,8,2,4,5], 2));


// [1,3,8,2,4,5]; => [4, 5, 1, 3, 8, 2];
// 1) swap 4 and 1 => [4, 3, 8, 2, 1, 5] // for (i = 0; i < k)[0] and [length - k - 1]
// 2) swap 5 and 3 => [4, 5, 8, 2, 1, 3] // for (j = length; j < k) [1] and [length - k - 1]
// 3) swap 1 and 8 => [4, 5, 1, 2, 8, 3]
// 4) swap 2 and 3 => [4, 5, 1, 3, 8, 2]


var rotateInPlace = function(nums, k) {
  var elementToSwap;
  var i, j;
  if (k === 0 || nums.length < 2) {
    return;
  }

  for (i = 0; i < k; i++) {
    for (j = nums.length - 1; j > nums.length - k - 1; j--) {
      elementToSwap = nums[i];
      nums[i] = nums[j];
      nums[j] = elementToSwap;
    }
  }

  console.log('nums: ', nums)

  for (i = k; i < nums.length - k; i++) {
    for (j = nums.length - 1; j > nums.length - k - 1; j--) {
      elementToSwap = nums[i];
      nums[i] = nums[j];
      nums[j] = elementToSwap;
    }
  }

  return nums;
};

rotateInPlace([1,3,8,2,4,5], 2);
console.log(rotateInPlace([1,3,8,2,4,5], 2));
