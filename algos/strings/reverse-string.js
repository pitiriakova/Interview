// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/


var reverseString = function (s) {
  var middleIndex = s.length / 2;
  var temp;

  for (let i = 0; i < middleIndex; i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }

  return s;
};

var d = ["s", "t", "r", "i", "n", "g"]; // => ["g", "n", "i", "r", "t", "s"];
var s = ["a"," ","b","a"]; // => ["g", "n", "i", "r", "t", "s"];
console.log(reverseString(s));
