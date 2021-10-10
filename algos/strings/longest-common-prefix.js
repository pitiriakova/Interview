var longestCommonPrefix = function(strs) {

  var counter = 0;
  if (strs.length < 2 || strs[0] === '') {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length - 1; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[0][i] === strs[j][i]) {
        console.log('trs[j][i]: ', strs[j][i])
        console.log('trs[0][i]: ', strs[0][i])
        counter = counter + 1;
      }
    }
  }
  console.log('counter: ', strs[0].slice(0, counter))
  return strs[0].slice(0, counter);
};

var arr = ["flower","flow","flight"]

console.log(longestCommonPrefix(arr));
