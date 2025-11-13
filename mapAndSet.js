'use strict';

/**
 * Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
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
for (let entry of pricesMap) {
  console.log(entry);
}

//MAP has forEach() built in method
let values = [];

pricesMap.forEach((value, key, map) => {
  values.push(`${key}: ${value} (Total items: ${map.size})`);
});
console.log(values);

//Bisa juga pakai Array.from()
let values2 = Array.from(
  pricesMap,
  ([key, value]) => `${key}: ${value} (Total items: ${pricesMap.size})`
);
console.log(values2);

//OBJECT.ENTRIES: Map from Object
//Syntax: Object.entries(obj)
// array of [key, value] pairs
let map2 = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);
console.log(map2.get('1')); // str1

//OBJECT.FROMENTRIES: Object from Map
