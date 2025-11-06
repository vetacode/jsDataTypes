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

//null/undefined have no methods
// console.log(null.test); // error

/*Task
Can I add a string property?
importance: 5
Consider the following code:

let str = "Hello";

str.test = 5;

console.log(str.test);
What do you think, will it work? What will be shown?
*/
let str2 = 'Hello';

str.test = 5; // (*)
console.log(str2.test);

//This example clearly shows that primitives are not objects.
// They can’t store additional data.
