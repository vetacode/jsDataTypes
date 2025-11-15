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

/**
 * Transforming objects
Objects lack many methods that exist for arrays, e.g. map, filter and others.

If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
 */

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); // 8

/**TASK 1
 * Sum the properties
importance: 5
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
 */

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let arrSalary = Object.values(salaries);
  console.log(arrSalary);

  let sum = 0;
  for (let sal of arrSalary) {
    sum += sal;
  }
  return sum;
}
console.log(sumSalaries(salaries));

//alternative using reduce
function sumSalaries2(salaries) {
  let arrSalary = Object.values(salaries);
  let sum = arrSalary.reduce((a, b) => a + b, 0);
  return sum;
}
console.log(sumSalaries2(salaries));

/**TASK 2
 * Count properties
importance: 5
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.
 */
let user2 = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user2)); // 2
