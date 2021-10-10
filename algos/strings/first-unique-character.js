var firstUniqChar = function (s) {
  var charsCount = {};
  var keys;

  for (var i = 0; i < s.length; i++) {
    if (charsCount.hasOwnProperty(s[i])) {
      charsCount[s[i]] = {
        index: i, count: charsCount[s[i]].count + 1
      };
    } else {
      charsCount[s[i]] = {
        index: i, count: 0
      };
    }
  }


  keys = Object.keys(charsCount);

  for (var j = 0; j < keys.length; j++) {
    if (charsCount[keys[j]].count === 0) {
      return charsCount[keys[j]].index;
    } else {
      if (j === keys.length - 1) {
        return -1;
      }
    }
  }
};

console.log(firstUniqChar("abbae"));
