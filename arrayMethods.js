//arr.splice can do insert, remove and replace elements.
//It mutates original arr
//syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
let games = ['ps', 'xbox', 'nintendo'];

console.log(games.splice(0, 1, 'sega')); //returns the romoved elements
console.log(games); //console arr mutates

games.splice(3, 0, 'ps', 'super nintendo');
console.log(games);

games.splice(-2, 2);
console.log(games);

//arr.slice. syntax: arr.slice([start], [end])
//it only copy the arr, not mutates the original arr

let fruits = ['apple', 'mango', 'banana', 'pear'];

console.log(fruits.slice(1, 3)); //copy from 1 to 3 (not include the index 3) ==> returns a new copy array
console.log(fruits); //the original array still intact (no mutation)

let newFruits = fruits.slice(); //shallow clone/copy entire arr
console.log(fruits === newFruits); //false
console.log(newFruits);

console.log(fruits.slice(-2)); //copy from -2 untill the end of arr

//concat: creates new array + values from other array + additional items
//syntax: arr.concat(arg1, arg2...)
let arr = [1, 2];

// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let arrayLike = {
  0: 'something',
  length: 1,
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object]

let arrayLike2 = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr.concat(arrayLike2)); // 1,2,something,else

//Iterate forEach: arr.forEach
//syntax: arr.forEach(function(item, index, array) { ... do something with an item })
let harpot = ['Bilbo', 'Gandalf', 'Nazgul'];

// harpot.forEach();
harpot.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array} array`);
});
console.log(harpot);

//indexOf/lastIndexOf and includes
let arr2 = [1, 0, false];

console.log(arr2.indexOf(0)); // 1
console.log(arr2.indexOf(false)); // 2
console.log(arr2.indexOf(null)); // -1

console.log(arr2.includes(1)); // true

let fruits2 = ['Apple', 'Orange', 'Apple'];

console.log(fruits2.indexOf('Apple')); // 0 (first Apple)
console.log(fruits2.lastIndexOf('Apple')); // 2 (last Apple)

let alphabet = [NaN];
console.log(alphabet.indexOf(NaN)); //-1 (wrong, should be index 0)
console.log(alphabet.includes(NaN)); //true (correct)

//FIND and findIndex/findLastIndex
//syntax: let result = arr.find(function(item, index, array) {
// if true is returned, item is returned and iteration is stopped
//for falsy scenario returns undefined })

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

users.forEach((item) => {
  console.log(`this is ${item.name}`);
});

let user = users.find((item) => item.id == 1);

console.log(user.name);

let users2 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'John' },
];

// Find the index of the first John
console.log(users2.findIndex((user) => user.name == 'John')); // 0

// Find the index of the last John
console.log(users2.findLastIndex((user) => user.name == 'John')); // 3

//FILTER
//Syntax: let results = arr.filter(function(item, index, array) {
// if true item is pushed to results and the iteration continues
// returns empty array if nothing found});

let anyUser = users2.filter((item) => item.name == 'John');
console.log(anyUser);

//Buat contoh penggunaan filter yang memanfaatkan semua parameter filter
//buat nilai rata-rata:

let num = [10, 40, 5, 25, 30, 40];

let average = num.filter((item, index, arr) => {
  let avg = arr.reduce((a, b) => a + b) / arr.length;
  return item > avg && index != 1;
});

console.log(average); //walaupun angka 40 masuk ke dalam item > avg, tapi kena filter di index!=1

//Transform an array
//MAP. Syntax: arr.map()
/*
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
*/

let movies = ['godfather', '1on1', 'run baby run'];

let movieLength = movies.map((item) => item.length);
console.log(movieLength);

//SORT: it return the sorted arr (mutate the original arr)
//syntax: arr.sort(fn)

let numSort = num.sort(); //the default is sorted by string comparison
console.log(numSort); //sorted by strings as default (5 is the biggest)

//use the function to sort by number coorectly
let numSort2 = num.sort((a, b) => a - b); //ascendent sort
let numSort3 = num.sort((a, b) => b - a); //descendent sort
console.log(numSort2);
console.log(numSort3);

/*
| Method       | Returns        | Purpose                             |
| ------------ | -------------- | ----------------------------------- |
| `.forEach()` | `undefined`    | Just loops (for side effects)       |
| `.map()`     | New array      | Transforms each element             |
| `.filter()`  | New array      | Keeps elements that match condition |
| `.find()`    | Single element | Returns the first that matches      |
*/
