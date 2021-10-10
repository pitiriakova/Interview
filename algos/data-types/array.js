// Related Topics
// Standard built-in objects
// Array
// Properties
// Array.prototype[@@unscopables]
// Array.prototype.length
// Methods
// Array.prototype[@@iterator]()
// get Array[@@species]
// Array.prototype.at()
function log(s) {
  return console.log(s);
}


// Array.prototype.concat() => newArr
//  to merge two or more arrays
log('******Array.prototype.concat: ');
var a = [1,2,3];
log(a.concat()); // => returns copy of a
log(a.concat([1])); // [1,2,3,1]
log(a); // [1,2,3] (hasn't changed after previous concat)
log(a.concat('str')); // [1,2,3, 'str']

var obj = {
  a: 5, b: 6
};
log('obj before: ', obj);

var f = a.concat(obj);
f[3]["a"] = 8;
log(f);
log('obj after: ', obj); // will change object
// var b = [5,6,7];
// var c = [9,9,8];
// var d = a.concat(b).concat(c);
// console.log(d)

// Array.prototype.copyWithin()
log('******Array.prototype.copyWithin: ');


// Array.prototype.entries()
log('******Array.prototype.entries: ');
// Array.prototype.every()
log('******Array.prototype.every: ');
// Array.prototype.fill()
log('******Array.prototype.fill: ');
// Array.prototype.filter()
log('******Array.prototype.filter: ');
// Array.prototype.find()
log('******Array.prototype.find: ');
// Array.prototype.findIndex()
log('******Array.prototype.findIndex: ');

// Array.prototype.forEach()
log('******Array.prototype.forEach: ');

// Array.prototype.slice() =>  new Array. doesn't modify existing array.slice piece of array between 2 indexes (not including end)
log('******Array.prototype.slice: ');
var arr1 = [1,2,3,4,5];
log(arr1.slice(0, 1)); // [1]
log(arr1.slice(0, 3)); // [1,2,3]
log(arr1.slice()); // [1,2,3,4,5]
log(arr1.slice(2, 0)); // []

// function list() {
//   return Array.prototype.slice.call(arguments)
// }
//
// let list1 = list(1, 2, 3) // [1, 2, 3]

//slice()
// slice(start)
// slice(start index, end index (not including))
var arr4 = [1,2,3];
log(a.splice(32, 108, 'yy')); // a will be [1,2,3, 'yy']
var b = a.splice(0, 2);
log(b); // a will be [1, 2], b will be [3, "yy"]


// Array.prototype.splice() => changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
log('******Array.prototype.splice: ');
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)






// Array.prototype.flat()
// Array.prototype.flatMap()

// Array.from()
// Array.prototype.includes()
// Array.prototype.indexOf()
// Array.isArray()
// Array.prototype.join()
// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()
// Array.of()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()

// Array.prototype.some()
// Array.prototype.sort()

// Array.prototype.toLocaleString()
// Array.prototype.toSource()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.values()
// Inheritance:
//   Function
