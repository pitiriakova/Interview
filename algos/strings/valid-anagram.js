var isAnagram = function (s, t) {
  var nS = {};

  if (s.length !== t.length) {
    return false;
  }
  for (var i = 0; i < s.length; i++) {
    if (nS.hasOwnProperty(s[i])) {
      nS[s[i]] = nS[s[i]] + 1;
    } else {
      nS[s[i]] = 1;
    }
  }

  for (var j = 0; j < t.length; j++) {
    console.log(nS)
    if (nS.hasOwnProperty(t[j])) {
      nS[t[j]] = nS[t[j]] - 1;
      if(nS[t[j]] < 0) {
        return false;
      }
    } else {

      return false;
    }
  }

  var values = Object.values(nS);

  for (var k = 0; k < values.length; k++) {
    console.log(values)
    if (values[k] !== 0) {
      return false;
    }

  }

  return true;
};

console.log(isAnagram("aacc",
"ccac"))


