/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var letters = {
    '2': ['a', 'b', 'c'],
    '3': ["d", "e", "f"],
    '4': ["g", "h", "i"],
    '5': ["j", "k", "l"],
    '6': ["m", "n", "o"],
    '7': ["p", "q", "r", "s"],
    '8': ["t", "u", "v"],
    '9': ["w", "x", "y", "z"],
  };

  function hasDigitBeenMatched(digit1, digit2) {
    return matchedDigits[digit1 + digit2] || matchedDigits[digit2 + digit1];
  }

  var combinations = [];
  const matchedDigits = {};
  let i = 0; let j = digits.length;

  while (i < j) {
    const digit1 = digits[i];
    const digit2 = digits[j];

    if (!hasDigitBeenMatched(digit1, digit2)) {
      for (let k = 0; k < digits[digit1].length; k++) {

      }
    }

    i++;
    m--;
  }

  // for (let i = 0; i < digits.length; i++) {
  //   const digit = digits[i];
  //   console.log('matchedDigits: ', matchedDigits);
  //
  //
  //     for (let j = 0; j < letters[digit].length; j++) {
  //       if (!hasDigitBeenMatched(digits[i])) {
  //         matchedDigits[digit[i]] = true;
  //       for (let k = letters[digit].length - 1; k >= 0; k--) {
  //         if (j > k) {
  //           combinations.push(letters[digit][j] + letters[digit][k]);
  //         }
  //       }
  //     }
  //   }
  // }

  return combinations;
};
var r = letterCombinations('23')

console.log(r);
