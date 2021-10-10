// https://leetcode.com/problems/shuffle-string/

// var restoreString = function(s, indices) {
//   if (s.length !== ind.length) {
//     return;
//   }
//
//   var newStr = '';
//   var pointer = 0;
//
//   while(pointer < s.length) {
//     for (let i = 0; i < s.length; i++) {
//
//       if (indices[i] === pointer) {
//         newStr = newStr + s[i];
//       }
//     }
//
//     pointer++
//   }
//
//   return newStr;
// };


var restoreString = function(s, indices) {
  var shuffledArr = [];
  shuffledArr.length = s.length;

  for (let i = 0; i < s.length; i++) {
    shuffledArr[indices[i]] = s[i];
  }

  return shuffledArr.join('');
};


var s = "aiohn";
var ind = [3,1,4,2,0];
console.log(restoreString(s, ind))

//
// var restoreString = function(s, indices) {
//   const obj = {}
//   for (let i = 0; i < indices.length; i++) {
//     obj[indices[i]] = s[i]
//   }
//   return Object.values(obj).join('')
// };

// 1) newS = "K" => ind[0]
// 2) newS = "Ka" => newS + ind[1]
