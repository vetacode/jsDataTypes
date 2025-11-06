let str = 'Hello';
console.log(str.toUpperCase()); // HELLO

let n = 1.23456;
console.log(n.toFixed(2)); // 1.23

console.log(typeof 0); // "number"

console.log(typeof new Number(0)); // "object"!

let zero = new Number(0);
if (zero) {
  // zero is true, because it's an object
  console.log('zero is truthy!?!');
}

let num = Number('123'); // convert a string to number
console.log(typeof num);
