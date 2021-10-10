// when there's less than 1000 data points,
// for, forEach, for ... of, while works ~with the same time
// as more points we, have as slower forEach and for of become
// the fastest is while
//

var arr = [1, 33, 5, 789, 0, 4, 3];

for (let i = 0; i < arr.length; i++) {
  arr[1] = 4444444;
  console.log(arr)
}
console.log('****', arr)
