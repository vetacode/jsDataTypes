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
