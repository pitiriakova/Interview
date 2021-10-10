// const obj = {
//   values: [33,4,5,6,11,22,3,44,5,6,77,0,9,8,-2,1]
//   start: 5,
//   end: 11,
//   [Symbol.iterator]() {
//     let idx = this.start, end = this.end;
//
//     let it = {
//       next: () => {
//         if (idx < end) {
//           idx++;
//         }
//       }
//     }
//   }
// }


// for ... of loop calls iterator.next inside


// prints range of numbers
Number.prototype[Symbol.iterator] = function*() {
  console.log(this); // [Number: 8]
  for (let i = 0; i <= this; i++) {
    yield i;
  }
}

console.log ([...8])



