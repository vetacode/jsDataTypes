'use strict';

//SYMBOL.ITERATOR
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let iter = 0;

for (let num of range) {
  console.log(num);
  iter += num;
}

console.log(iter);

let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range2) {
  console.log(num); // 1, then 2, 3, 4, 5
}

//ITERATING STRINGS
let snack = 'chitato';

for (let eat of snack) {
  console.log(eat);
}

//Calling an iterator explicitly: it gives more flexibility to play with the iteration than using for..of
let str = 'Hello';
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
