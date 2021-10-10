// TODO ????????????????????

function countAndSay(n) {
  let res = '1';

  for (let i = 1; i < n; i++) {
    res = say(res);
  }

  return res;
}

function say(str) {
  let res = '';
  let count = 0;
  let num = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === num) {
      count++;
    } else {
      res += count + str[i - 1];
      count = 1;
      num = str[i];
    }
  }

  return res + count + num;
}

console.log(countAndSay(5));
// n(1) => "1" => replace value.length + value
// n(2) => "11" => replace value.length + value
// n(3) => "21" => replace value.length + value
// n (4) => one 2 and one 1 => 1211
// n (5) => 111221 =>
// //1) while i === i + 1, temp = replace value.length + value => 3221
