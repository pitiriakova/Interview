// start loop i from 0 to the end
// start inner loop from j = 0 toll j = i - 1
// compare arr[j] and arr[j + 1], swap if aee[j] > arr[j + 2]
// define var noSwap;
// inside i loop noSwap = true;
// if we didn't swap in the last iteration, set noSwap = true
// break if noSwap




// start the outer loop from the end of the array, because the sorted items are in the end and we don't touch them if we go from the end
// the larger value will bubble to the top, to sort in acs order (from smallest to largest)
// compare current item with the next one
// if it is larger, we swap

// [30, 10, 14, 29, 30, 14, 18]
// 1) compare 30 and 10 => 30 > 10 => swap => [10, 30, 14, 29, 30, 14, 18]
// 2) compare 30 and 14 => 30 > 14 => swap => [10, 14, 30, 29, 30, 14, 18]
// 3) compare 30 and 29 => 30 > 29 => swap => [10, 14, 29, 30, 30, 14, 18]
// 4) do it until we reach the end of the array, then repeat

function bubbleSort(arr) {
  // if we didn't make swaps at last iteration, then we're done
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap();
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
}

// console.log(bubbleSort([4,56,88,32,56,23,1,34]));
// [30, 10, 14, 29, 30, 14, 18]
// [j] [j+1]                [i]

// after placing 1st item in the correct place
// [10, 14, 29, 30, 14, 18, 30]
// [j] [j+1]            [i]
