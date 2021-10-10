// var singleNumber = function(nums) {
//   const dict = {};
//
//   for (let i = 0; i < nums.length; i++) {
//     dict[nums[i]] = dict[nums[i]] + 1 || 1;
//   }
//   // console.log(dict)
//
//   for (let i = 0; i < nums.length; i++) {
//     dict[nums[i]] = dict[nums[i]] - 1;
//   }
//   console.log(dict)

  // for (let num in dict) {
  //   console.log(dict[num])
  //   if (dict[num] !== 0) {
  //     return dict[num];
  //   }
  // }
// };

// function singleNumber(nums) {
//   return nums.reduce((prev, curr) => {
//     console.log(prev ^ curr);
//     return prev ^ curr;
//   });
// }

// singleNumber([2,2,2,1,1,4,1])


// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   let minPrice = Number.MAX_VALUE;
//   let minPriceDay = 0;
//
//   for (let i = 0; i < prices.length; i++) {
//     if (minPrice > prices[i]) {
//       minPrice = prices[i];
//       minPriceDay = i;
//     }
//   }
//
//   for (let i = minPriceDay; i < prices.length; i++) {
//     console.log(minPriceDay)
//     // console.log(prices[i] )
//     if (prices[i] > maxProfit) {
//       maxProfit = prices[i];
//     }
//   } console.log(maxProfit)
//
//   return maxProfit - minPrice;
// };
// maxProfit([2,4,1]);

const topKFrequent = (nums, k) => {
  const map = {};
  const result = [];
  const bucket = Array(nums.length + 1).fill().map(() => []);

  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }

  for (let num in map) {
    console.log(bucket)
    // push frequencies
    bucket[map[num]].push(parseInt(num));
  }

  for (let i = nums.length; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    result.push(bucket[i].shift());
  }

  console.log(result)
  return result;
};

topKFrequent([122,122,122,222,2,311], 2);
