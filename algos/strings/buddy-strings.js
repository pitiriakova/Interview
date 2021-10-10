// https://leetcode.com/problems/buddy-strings/

// var buddyStrings = function(a, b) {
//   let counter = 0;
//   let counterWithinTheString = 0;
//
//   if (a.length !== b.length ) {
//     return false;
//   }
//
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       counter++
//     }
//   }
// console.log('counterWithinTheString: ', counterWithinTheString)
// console.log('counter: ', counter)
//   return counter === 2 || (counter === 0 && a.length > 2 );
// };


// TODO!! super fast solution
// var buddyStrings = function(a, b) {
//   var newA = a.split("");
//   var wewww = newA;
//
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (j !== i) {
//         wewww = [...newA];
//         console.log(wewww)
//         wewww[i] = a[j];
//
//         wewww[j] = a[i];
//         console.log(wewww)
//         if (wewww.join("") === b) {
//           return true;
//         }
//       }
//     }
//   }
//
//   return false;
// };

var buddyStrings = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var firstA;
  var firstB;
  var arr = [];
  var result;
  arr.length = 26;
  arr.fill(0);
  for (let i = 0; i < a.length; i++) {
    let first = a.charCodeAt(i);
    if (a[i] !== b[i]) {
      let second = b.charCodeAt(i);
      if (firstA) {
        if (result) {
          return false;
        } else {
          result = firstA === second && firstB === first;
          if (result === false) {
            return false;
          }
        }
      } else {
        firstA = first;
        firstB = second;
      }
    } else {
       arr[first - 97] = arr[first - 97] + 1;
    }
  }
  if (result) {
      return true;
  } else if (firstA) {
      return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      return true;
    }
  }
  return false;
};
//
console.log(buddyStrings("abccd",
  "abddc"));
// console.log(buddyStrings("aa",
//   "aa"));
// console.log(buddyStrings("ab",
//   "ab"));
// console.log(buddyStrings("abac",
//   "abac"));
// console.log(buddyStrings("abcd",
//   "badc"));

// 1) go through 1st string
// 2) check if str1[i] === str2[i]
// 3) counter++
// 4) if strings are equal, we need at lest 2 equal chars withing the string
// 4) if counter is 2 => return true
