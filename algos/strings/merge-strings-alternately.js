// https://leetcode.com/problems/merge-strings-alternately/

// this solution is twice faster
var mergeAlternately = function(word1, word2) {
  var arr = [];

  for (var i = 0; i <= word1.length; i++) {
    console.log(i)
    console.log(word1[i])
    console.log(word2[i])
    if (!word1[i]) {
      arr[i * 2] = word2.slice(i, word2.length);
      return arr.join("");
    }

    if (!word2[i]) {
      arr[i * 2 + 1] = word1.slice(i, word1.length);
      return arr.join("");
    }

    arr[i * 2] = word1[i];
    arr[i * 2 + 1] = word2[i];
  }

  return arr.join("");
};

// this solution is more readable
// var mergeAlternately = function(word1, word2) {
//   var arr = [];
//
//   for (var i = 0; i <= word1.length; i++) {
//     if (!word1[i]) {
//       arr.push(word2.slice(i, word2.length));
//       return arr.join("");
//     }
//
//     if (!word2[i]) {
//       arr.push( word1.slice(i, word1.length));
//       return arr.join("");
//     }
//
//     arr.push(word1[i]);
//     arr.push(word2[i]);
//   }
//
//   return arr.join("");
// };


var s = "ab"
var s2 ="pqrs"
console.log(mergeAlternately(s, s2))

// 1) s
// 2) sK
// ...
// ... sKtartie


//   Pick the smallest character from s and append it to the result.
//   Pick the smallest character from s which is greater than the last appended character to the result and append it.
//   Repeat step 2 until you cannot pick more characters.
//   Pick the largest character from s and append it to the result.
//   Pick the largest character from s which is smaller than the last appended character to the result and append it.
//   Repeat step 5 until you cannot pick more characters.
//   Repeat the steps from 1 to 6 until you pick all characters from s.
