// var reverse = function(x) {
//   var b = x.toString();
//   var temp;
//   var start = 0;
//   var end = b.length;
//   var newStrStart = '';
//   var newStrEnd = '';
//
//   while (start < end) {
//     temp = b[start];
//     b[start] = b[end];
//     b[end] = temp;
//     start++;
//     end--;
//     newStrStart += b[start];
//     newStrEnd += b[end];
//   }
//
//   return (newStrEnd + newStrStart).valueOf();
// };
//
// var a = 12345; // => 54321
// // 1) swap 1 and 5 => 52341
// // 2) swap 4 and 2 => 54321
// console.log(reverse(a));



var reverse = function(x) {
  if (x >= Number.MAX_VALUE) {
    return 0;
  }

  var newStr = '';
  if (x < 0) {
    newStr = '-';
    x = -x;
  }
  var b = x.toString();

 for (var i = b.length - 1; i >= 0; i--) {
     newStr += b[i];
 }

 return newStr.valueOf();

};

var a = 12345; // => 54321
// 1) swap 1 and 5 => 52341
// 2) swap 4 and 2 => 54321
console.log(reverse(-123));
