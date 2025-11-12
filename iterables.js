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

//ARRAY.FROM
//Convert arrary-like to array
let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

let currency = 'IDR, USD, SGD';
let currArr = Array.from(currency);
console.log(currArr);
console.log(currency.split(''));
console.log(currency.split(', '));
console.log(currency); //original array is not mutate
console.log(currArr.pop());

let rangeConvert = Array.from(range);
console.log(rangeConvert);

//for of loop will do the same
let str2 = '𝒳😂';

let chars = [];
for (let char of str2) {
  chars.push(char);
}

console.log(chars);
console.log(str2);

//can also use for of loop, but still have to have [Symbol.iterator]() in the scope
let numRes = [];
for (let num of range2) {
  console.log(num);
  numRes.push(num);
}
console.log(numRes);
