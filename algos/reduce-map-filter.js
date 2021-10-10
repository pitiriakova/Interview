/********** MAP **********/
function jsMap(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i]);
    mapArr.push(result);
  }
  return mapArr;
}

function mapperFunc(num) {
  return num * 2
}

console.log(
  jsMap([1,2,3], mapperFunc)
);

/********** FILTER **********/
function isEven(itemToFilter) {
  return itemToFilter % 2 === 0;
}

function JsFilter(arr, filterCb) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    let result = filterCb(arr[i]);
    if (result) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
console.log(JsFilter([1,5,6,7,8,9,212,0,-7,-22], isEven))

/********** REDUCE **********/
// The reduce() method executes a reducer function (that you provide)
// on each member of the array
// resulting in a single output value.

// The reducer function is written as the sum between the accumulator and current value.
// When you pass the reducer function to the reduce() method,
// it will loop through each number in the array and adds it to the accumulator ( 0 at the beginning),
// which itself becomes the new accumulator for the next iteration.
// This continues till the end of the array and returns the accumulator as a result.

let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => {
  // Before the start of the iteration, accumulator = 0
  // 1st iteration, accumulator += 1; // accumulator = 1
  // 2nd iteration, accumulator += 2; // accumulator = 3
  // 3rd iteration, accumulator += 3; // accumulator = 6
  // 4th iteration, accumulator += 4; // accumulator = 10
  console.log('accumulator: ', accumulator);
  console.log('currentValue: ', currentValue);

  // Before the start of the iteration, accumulator = 0
  // 1st iteration, accumulator += 5; // accumulator = 5
  // 2nd iteration, accumulator += 1; // accumulator = 6
  // 3rd iteration, accumulator += 2; // accumulator = 8
  // 4th iteration, accumulator += 3; // accumulator = 11
  // 4th iteration, accumulator += 4; // accumulator = 15

  return accumulator + currentValue;
};

// 1 + 2 + 3 + 4
const sum = arr.reduce(sumReducer);
console.log(sum);// prints 10


// 5 + 1 + 2 + 3 + 4
// const sum2 = arr.reduce(sumReducer);
// console.log(sum2);// prints 15




