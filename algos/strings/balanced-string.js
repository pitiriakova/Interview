// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
  var lCounter = 0;
  var rCounter = 0;
  var counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      lCounter++;
    } else {
      rCounter++
    }

  if (lCounter === rCounter) {
    counter++;
  }
  }

  return counter;
};

console.log(balancedStringSplit("RLRRLLRLRL"))
