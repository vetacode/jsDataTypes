'use strict';

//ITERABLE is the object that can be used in for..of loop
//ARRAY-LIKE is the object that has indexed prop and length

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
//Syntax: Array.from(arrayLike, mapFunction?, thisArg?)
//Convert array-like objects and iterable objects (Map, Set or anything can loop with for..of) into a real Array
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

//work with surrogate
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str3 = '𝒳😂𩷶';

console.log(slice(str3, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(str3.slice(1, 3)); // garbage (two pieces from different surrogate pairs)
