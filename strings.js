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

//changing the case
console.log('Interface'[0].toLowerCase()); // 'i'

//str.indexOf
//syntax: str.indexOf(substr, pos).
let stat = `Today is amazing as always`;
console.log(stat.indexOf('T'));
console.log(stat.indexOf('o'));
console.log(stat.indexOf('d'));
console.log(stat.indexOf('a'));
console.log(stat.indexOf('y'));
console.log(stat.indexOf('is'));
console.log(stat.indexOf('as'));
console.log(stat.indexOf('al'));
console.log(stat.indexOf('always'));
console.log(stat.indexOf('alwais'));
console.log(stat.indexOf('q'));
