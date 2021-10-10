var isPalindrome = function (s) {
  var re = /[\W_]/g;
  var correctString = s.toLowerCase().replace(re, '');
  var halfLength = correctString.length / 2;
  var leftPointer = 0;
  var rightPointer = correctString.length - 1;
  console.log(correctString)

  while (leftPointer < rightPointer) {
    if (correctString[leftPointer] !== correctString[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }
  return true;
};

console.log(isPalindrome("assar"))


// LEETCODE SOLUTION WITHOUT REGEXP

// var isPalindrome = function(str) {
//
//   let s = 0, e = str.length - 1;
//
//   while (s < e) {
//     while (s < e && !isNumLetter(str[s])) s++;
//     while (s < e && !isNumLetter(str[e])) e--;
//
//     if (str[s].toLowerCase() != str[e].toLowerCase()) return false;
//
//     s++;
//     e--;
//   }
//
//   return true;
//
// };
//
// var isNumLetter = function(c) {
//   let code = c.charCodeAt(0);
//
//   if (((code >= 48) && (code <= 57))  // numbers
//     || ((code >= 65) && (code <= 90))  // uppercase
//     || ((code >= 97) && (code <= 122))) {  // lowercase
//     return true
//   }
//   else {
//     return false
//   }
// }
