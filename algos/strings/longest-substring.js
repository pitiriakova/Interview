function longestSubstring(str1, str2) {
  const result = new Array(str1.length);
  let i = 0; let j = 0;

  for (let r = 0; r < result.length; r++) {
    result[r] = [];
  }
  console.log(result)
  for( let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        if (i === 0) {
          result[i][j] = result[i][j] + 1 || 1;
        } else {
          result[i][j] = result[i - 1][j - 1] + 1 || 1;
        }
      } else {
        result[i][j] = 0;
      }
    }
  }

  console.log(result)
  return result;
}
//      h    o   m   e
// h [  1,   0,  0,  0 ]     i=0
// o [  0,   2,  0,  0 ]     i=1
// u [  0,   0,  0,  0 ]     i=2
// s [  0,   0,  0,  0 ]     ...
// e [  0,   0,  0,  0 ]

//     j=0   j=1 j=2 j=3
longestSubstring('home', 'house');
