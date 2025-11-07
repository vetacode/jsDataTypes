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

//the second parameter is the initital position
let gadget = 'Widget with id';

console.log(gadget.indexOf('id')); // 1. "..idget with.."
console.log(gadget.indexOf('id', 2)); // 12

//find all substring occurances
let letter = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;

while (true) {
  let foundPos = letter.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

//OR simplest
let position = -1;
while ((position = letter.indexOf(target, position + 1)) != -1) {
  console.log(position);
}

//Apply with if
let str3 = 'Widget with id';

if (str3.indexOf('Widget')) {
  //if returns 0 then it return false, & not continue
  console.log('We found it'); // doesn't work!
}

if (str3.indexOf('Widget') != -1) {
  console.log('We found it'); // works now!
}

//includes, startsWith, endsWith
console.log('Widget with id'.includes('Widget')); // true
console.log('Hello'.includes('Bye')); // false
console.log('Widget'.startsWith('Wid')); // true, "Widget" starts with "Wid"
console.log('Widget'.endsWith('get')); // true, "Widget" ends with "get"

//Getting a substring
// Syntax: str.slice(start [, end]) ==> return the part of string from Start to (not including) End. For practical use it’s enough to remember only slice.
let str4 = 'stringify';
console.log(str4.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str4.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

console.log(str4.slice(2)); // 'ringify', from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
console.log(str4.slice(-4, -1)); // 'gif'

// str.substring(start [, end])
// similar with slice but it possible start greater than end, with simply swap it

// these are same for substring
console.log(str4.substring(2, 6)); // "ring"
console.log(str4.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str4.slice(2, 6)); // "ring" (the same)
console.log(str4.slice(6, 2)); // "" (an empty string)

//str.substr(start [, length])
console.log(str4.substr(2, 4)); // 'ring', from the 2nd position get 4 characters
console.log(str4.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
