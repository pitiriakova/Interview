function *uniqueID() {
  while(true) {
    yield Math.random();
  }
}

console.log(uniqueID().next());

const obj = {
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  values: [33,4,5,6,11,22,3,44,5,6,77,0,9,8,-2,1],
  start: 5,
  end: 11,
}

const obj2 = [...obj]
console.log(obj2);

let i = obj[Symbol.iterator]();
console.log(i.next())
console.log(i.next())
console.log(i.next())


const numbers = {
  // object destructuring pattern
  *[Symbol.iterator](
      {
        start = 0,
        step = 1,
        end = 100,
      } = {}
  ) {
    for (let i = start; i <= end; i = i + step) {
      yield i;
    }
  },
}

// should print 0 to 100 by 1s
for (let num of numbers) {
  console.log(num)
}
// should print 6 to 30 by 6s
for (let num of numbers[Symbol.iterator](
  {
    start: 6,
    step: 4,
    end: 30
  }
)) {
  console.log(num)
}
