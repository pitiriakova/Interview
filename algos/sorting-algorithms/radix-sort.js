function getDigit(num, i) {
  if (!num) return 0;
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
  // +num.toString().charAt(position);
  //
}

function digitCount(num) {
  console.log(num)
  if (!num) return 1;
// +num.toString().length - 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function RadixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}


// console.log(digitCount(444));
console.log(RadixSort([23, 345, 5467, 12, 2345, 9852]));
