'use strict';

/**
 * Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
new Map() – creates the map.
map.entries() - iterating the new Map sets. Return an iterable key-value pairs //shorthand: omit .entries()
map.set(key, value) – stores the value by the key. : it returns the Map itself, not the function results
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 */

let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map);

// The regular Object would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); // 3

//Map can also use objects as keys.
let john = { name: 'John' };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123

let john2 = { name: 'John' };
let ben = { name: 'Ben' };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john2] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj['[object Object]']); // 123

//map chaining: produce object
console.log(map.set('1', 'str1').set(1, 'num1').set(true, 'bool1'));

/**
 * Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */

let fruits = [
  ['banana', 100],
  ['apple', 200],
  ['grape', 300],
];
let pricesMap = new Map(fruits);

console.log(pricesMap);

for (let fruit of pricesMap.keys()) {
  console.log(fruit);
}
for (let price of pricesMap.values()) {
  console.log(price);
}
for (let entry of pricesMap.entries()) {
  console.log(entry);
}

//MAP has forEach() built in method
let values = [];

pricesMap.forEach((value, key, pricesMap) => {
  values.push(`${key}: ${value} (Total items: ${pricesMap.size})`);
});
console.log(values);

//Bisa juga pakai Array.from()
let values2 = Array.from(
  pricesMap,
  ([key, value]) => `${key}: ${value} (Total items: ${pricesMap.size})`
);
console.log(values2);

//OBJECT.ENTRIES: Map from Object
//Syntax: Object.entries(obj): to create a Map from plain Object

let obj = {
  name: 'John',
  age: 30,
};
let map3 = new Map(Object.entries(obj));
console.log(Object.entries(obj));
console.log(map3.get('name'));

// array of [key, value] pairs
let map2 = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);
console.log(map2.get('1')); // str1

//OBJECT.FROMENTRIES: to create a regular Object from Map
//Syntax: Object.fromEntries([iterable])
let cars = Object.fromEntries([
  ['hyundai', 1000],
  ['toyota', 300],
  ['honda', 500],
]);

console.log(cars);

//We have Object stored in a Map but we need to pass it to external that expect plain Object:
let halloween = new Map();
halloween.set('dracula', 5);
halloween.set('draculi', 3);
halloween.set('draculay', 1);
console.log(halloween);
console.log(halloween.entries());

let halloweenObj = Object.fromEntries(halloween.entries()); //we can omit the .entries()
console.log(halloweenObj);
console.log(halloweenObj.draculi);

/** SET
 * A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
 */

//Set only keeps unique values
let visitor = new Set();

let andi = { name: 'Andi' };
let siska = { name: 'Siska' };
let rama = { name: 'Rama' };

visitor.add(andi);
visitor.add(siska);
visitor.add(andi);
visitor.add(rama);
visitor.add(andi);
visitor.add(rama);

console.log(visitor);
console.log(visitor.size);
console.log(visitor.delete(andi));

for (let user of visitor) {
  console.log(user.name);
}

//Iteration over Set
//We can loop over a set either with for..of or using forEach:
let buah = new Set(['mangga', 'jeruk', 'salak']);

console.log(buah);

for (let fruit of buah) {
  console.log(fruit);
}

buah.forEach((item, itemAgain, buah) => {
  console.log(item, itemAgain, buah.size);
});

/**
 * Set iterators methods:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
 */

/**TASK 1
 * Filter unique array members
importance: 5
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  / your code /
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type.

P.P.S. Use Set to store unique values.
 */

let values3 = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

function unique(arr) {
  let arrai = new Set(arr);
  console.log(arrai);
  return Array.from(arrai);
}
console.log(unique(values3)); // Hare, Krishna, :-O

/**TASK 2
 * Filter anagrams
importance: 4
Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
 */

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let map = new Map();
  console.log(map);

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    console.log(sorted);
    console.log(map.set(sorted, word));
  }
  console.log(map.values());
  console.log(map);
  return Array.from(map.values());
}

console.log(aclean(arr));

//Alternative: using Object
function aclean2(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    console.log(sorted);
    console.log(obj[sorted]);
    obj[sorted] = arr[i];
  }
  console.log(Object.values(obj));
  return Object.values(obj);
}

console.log(aclean2(arr));

/**TASK 3
 * Iterable keys
importance: 5
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?
 */

let user = new Map();
console.log(user);

user.set('name', 'John');
console.log(user);

let keys = user.keys();
console.log(keys);

let arrKeys = Array.from(keys);
console.log(arrKeys);

let arrPush = arrKeys.push('more'); //it will returns the new length of the array!, not the array results
console.log(arrPush);
console.log(arrKeys); // it will logs array results
