function sortedFrequency(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < n) {
      start = mid + 1;
    } else if (arr[mid] > n) {
      end = mid - 1
    } else {
      let counter = 1;
      let i = mid - 1;

      while (arr[i] === arr[mid] && i >= start) {
        i--;
        counter++;
      }
      i = mid + 1;

      while (arr[i] === arr[mid] && i <= end) {
        i++;
        counter++;
      }
      return counter;
    }
  }

  return 0;
}

let a = sortedFrequency([1, 1, 1, 1, 3, 3, 3], 2);
console.log(a);
