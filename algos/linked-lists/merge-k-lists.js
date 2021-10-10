function merge(arr1, arr2){
  console.log(arr1)
  console.log(arr2)
  let result = [];
  let i, j;

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr[i]);
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
  console.log(result)
  return result;
}
let start = 0;
var mergeKLists = function(lists) {
  //[[1,4,5],[1,3,4],[1,3,4],[1,3,4],[1,3,4],[2,6]]
  // 1) [1,4,5] && [1,3,4] => result
  // 2) result && [2,6];

  if (lists.length < 1) return lists;
  console.log(lists)


  // let mid = Math.floor(lists.length / 2);
  let left = mergeKLists(arr.pop(), arr.pop());
  let right = mergeKLists(lists.slice(mid + 1, lists.length));

  return merge(left, right);
};
mergeKLists([[1,4,5],[1,3,4],[2,6]])
