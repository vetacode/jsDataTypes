let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//Hexadecimal 0x and Octal numeral system 0b and 0o

console.log(0xff); // 255
console.log(0xff); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log(a == b); // true, the same number 255 at both sides

//toString(Base)
let angka = 255;

console.log(angka.toString(16)); // ff
console.log(angka.toString(2)); // 11111111

console.log((123456).toString(36)); // 2n9c

/*
Two dots to call a method
Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now uses the method.

Also could write (123456).toString(36).*/

//Rounding
let num = 1.23456;
console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

let num1 = 12.34;
console.log(num1.toFixed(1)); // "12.3"

let num2 = 12.36;
console.log(num2.toFixed(1)); // "12.4"

let num3 = 12.34;
console.log(num3.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits

//Decimal solution: using toFixed
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3
console.log(typeof sum); //number

sum = sum.toFixed(2);
console.log(typeof sum); //string

//Funny thing
// Hello! I'm a self-increasing number!
console.log(9999999999999999); // shows 10000000000000000

console.log(0 === -0); //true

//Infinite and NaN
//NaN is unique
console.log(NaN === NaN); // false

//ParseInt and ParseFolat
//function parseInt returns an integer, whilst parseFloat will return a floating-point number:
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading
console.log(parseInt('a123')); // NaN, the first symbol stops the process

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, without 0x also works

console.log(parseInt('2n9c', 36)); // 123456

//Math.random Math.max Math.min() Math.pow(n, power)

let numbre = '145';
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(20, 0, -2, -10, 30, 50));
console.log(Math.min(20, 0, -2, -10, 30, 50));
console.log(Math.min());
console.log(Math.pow(3, 2));

/* TASK 1
Why 6.35.toFixed(1) == 6.3?
importance: 4
According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:

alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way?
*/

console.log((6.35 * 10).toFixed(20));
console.log(Math.round(6.35 * 10) / 10);

/*TASK 2
Repeat until the input is a number
importance: 5
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

function readNumber() {
  let validNum;

  do {
    validNum = 100;
  } while (!isFinite(validNum));

  if (validNum == null || validNum == '') return null;

  return +validNum;
}

console.log(readNumber());

/* TASK 3
An occasional infinite loop
importance: 4
This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}
 */

let i = 0;
while (i < 11) {
  i += 0.2;
  i > 9.8 && i < 10.2 ? console.log(i) : null;
}
