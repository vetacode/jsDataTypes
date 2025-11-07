let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

let str1 = 'Hello\nWorld'; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true

//Accessing character
let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.at(0)); // H

// the last character
console.log(str[str.length - 1]); // o
console.log(str.at(-1));

//String length
console.log(`My\n`.length); // 3
console.log(`mobile\n`.length); //7. \n is a one special character that will be counted as one

let car = 'sport';
console.log(car[4]);
console.log(car.at(-1));
