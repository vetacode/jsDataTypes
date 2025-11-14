/**
 * Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
 */

/**
 * Please note the distinctions (compared to map for example):

Map
Call syntax :	map.keys()
Returns     :	iterable

Object
Call syntax : Object.keys(obj), but not obj.keys()
Returns     :“real” Array
 */

let user = {
  name: 'John',
  age: 30,
};
Object.keys(user); //["name", "age"]
Object.values(user); //["John", 30]
Object.entries(user); // [ ["name","John"], ["age",30] ]

console.log(user);

// loop over values

let arrValues = [];

for (let value of Object.values(user)) {
  console.log(value); // John, then 30
  arrValues.push(value);
}

console.log(arrValues);
