'use strict';

/**
 * Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
new Map() – creates the map.
map.entries() - iterating the new Map sets. Return an iterable key-value pairs //shorthand: omit .entries()
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
//Syntax: Object.fromEntries([iteration Obj])
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
