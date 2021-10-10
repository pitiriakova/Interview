// each element is compared to the left part of the array
// start with the 2nd, compare to the previous. if it's less, swap them

//
//   1) [5, 3, 4, 1, 2] i=1; arr[i] = 5
//   3 < 5, then swap
//   => [3, 5, 4, 2, 1]
//
//   2) i=2. arr[i] = 4
//   compare 4 with 3 and 5. 4 < 5, then insert 4 between
//   = >  [3, 4, 5, 2, 1]
//
//   3) i=3, arr[i] = 2
//   compare 2 with [3,4,5]  = >  [2, 3, 4, 5, 1]
//
//  4) i = 4, arr[i] = 1
//  compare 1 with [2,3,4,5]
//  => [1, 2, 3, 4 , 5]

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));











