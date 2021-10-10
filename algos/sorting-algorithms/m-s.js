function merge(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
  }

  while(i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right)
}

// console.log(merge([1,10,50], [2,14,99,100]));

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let left = arr[0];
//
//   for (let i = 1; i < arr.length; i++) {
//     left = merge(left, arr[i]);
//   }
//
//   return left;
// }



// console.log(mergeSort([[10,24, 73, 76, 108], [73, 96,108], [22, 24, 66, 77, 88, 90]]));
console.log(mergeSort([10,24, 73, 76, 108, 73, 96,108, 22, 24, 66, 77, 88, 90]));

// 1) merge [10,24,76,73, 108], [96,73, 108] => [ ... ]
// 2 merge [ ... ], [111, 23, 15, 16, 7]
