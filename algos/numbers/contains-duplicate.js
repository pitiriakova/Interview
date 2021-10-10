// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
  const dict = {};

  for (let num of nums) {
    if (dict[num] in dict) {
      return true;
    }
    dict[num] = num;
  }
  return false;
};


// var containsDuplicate = function(nums) {
//   return new Set(nums).size !== nums.length;
// };

// var containsDuplicate = function(nums) {
//   const dict = {};
//
//   for (let i = 0; i < nums.length; i++) {
//     if (dict.hasOwnProperty(nums[i])) {
//       dict[nums[i]] = dict[nums[i]] + 1;
//     } else {
//       dict[nums[i]] = 0;
//     }
//   }
//
//   for (let i in dict) {
//     console.log('dict[i]: ', dict[i])
//     if (dict.hasOwnProperty(i) && dict[i] > 0) {
//       return true;
//     }
//   }
//
//
//   return false;
// };


const nums = [1,2,3,4];
console.log(containsDuplicate(nums));
