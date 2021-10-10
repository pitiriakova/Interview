// start at the beginning
// suppose the 1st min is arr[0]
// compare the min el with every el in the arr. find new min, swap it with the beginning value

//    [5, 3, 4, 2, 1]
// [newMin]

// find a minimum, compare with the next one, swap
// 1) compare 5 and 3; 3 less then 5, so 3 is a new minimum
// 2) compare 3 (new minimum) and 4 (the next element). 3 is still less than 4, go on
// 3) compare 3 and 2. 2 is less than 3, so 2 is the new min
// 4) compare 2 and 1. 1 is less than 2, so 1 is the smallest element in the iteration
// 5) swap 5 (the beginning) and current min (1)
// => [1, 3, 4, 2, 5]


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++ ) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      // for descending order
      // if (arr[minIndex] > arr[j]) {
      //   minIndex = j;
      // }
    }

    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

// console.log(selectionSort([4,56,88,32,56,23,1,34]));








