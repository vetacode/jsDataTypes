//SPLICE can do insert, remove and replace elements.
//It mutates original arr
//syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
let games = ['ps', 'xbox', 'nintendo'];

console.log(games.splice(0, 1, 'sega')); //returns the romoved elements
console.log(games); //console arr mutates

games.splice(3, 0, 'ps', 'super nintendo');
console.log(games);

games.splice(-2, 2);
console.log(games);

//SLICE. syntax: arr.slice([start], [end])
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

//TRANSFORMING AN ARRAY
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
console.log(numSort2);

let numSort3 = num.sort((a, b) => b - a); //descendent sort
console.log(numSort3);

//REVERSE: arr.reverse()
//it mutates original arr

let num2 = [3, 2, 5, 10, 2, 1, 50];
console.log(num2.reverse());

console.log(num2);

//SPLIT and JOIN
//syntax: arr.split(delimit, number) //number is the returned limit of arr length

let names = 'Bilbo, Gandalf, Nazgul, Harry, Potter';

let arr3 = names.split(', '); //delimiter adalah apa yg mau dihilangkan dari string names, untuk membuat tiap string menjadi masing2 item tersendiri
console.log(names);
console.log(arr3);
console.log(arr3.length);

let arr4 = names.split(); //tanpa delimiter it will merged into 1 item
console.log(arr4);
console.log(arr4.length);

let arr5 = names.split(', ', 1); //it limits returned array length and ignore the rest
console.log(arr5);

let tes = 'coba';
let arr6 = tes.split(''); //empty delimit will split the string into letters
console.log(arr6);

for (let name of arr3) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

//latihan map
console.log(arr3);
let namaku = arr3.map(
  (item, index) => `namaku adalah ${item}, di urutan nomor ${index + 1}`
);
console.log(namaku);

//join
console.log(arr3.join(', '));

//REDUCE and REDUCE RIGHT
//syntax: let value = arr.reduce(function(accumulator, item, index, array) {
// ... }, [initial]);
//typical syntax with 2 arguments only: let value = arr.reduce((sum, current) => sum + current, 0);

let angka = [2, 3, 1, 5, 6, 2, 1];

let jumlah = angka.reduce((sum, current) => sum + current, 0);
console.log(jumlah);

//bisa juga ga pake initial value 0
let jumlah2 = angka.reduce((tot, skr) => tot + skr);
console.log(jumlah2);

//The method arr.reduceRight does the same but goes from right to left.
let jumlahRight = angka.reduceRight((sum, init) => sum + init, 0);
console.log(jumlahRight);

//reduceRight is useful for strings concatenation
let letter = ['a', 'b', 'c', 'd'];

let red = letter.reduce((a, b) => a + b);
console.log(red);
let redRight = letter.reduceRight((a, b) => a + b);
console.log(redRight);

//Array.isArray
console.log(typeof {}); // object
console.log(typeof []); // object (same)

//to differentiate object with array, use Array.isArray
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

//COMPLETENESS sake of Array Method
//arr.find(func, thisArg);
//arr.filter(func, thisArg);
//arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let mans = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

let soldiers = mans.filter(army.canJoin, army);
console.log(soldiers);
console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);

//OR
let soldiers2 = mans.filter((selected) => army.canJoin(selected));
console.log(soldiers2);

/*
| Method       | Mutate Array   | Purpose                             |
| ------------ | -------------- | ----------------------------------- |
| .splice      | Yes            |      |
| .sort        | Yes            |           |
| .reverse     | Yes            |  |
|   |  |     |
|   |          |                               |
|      |                                  |
|       | 

*/

/*
| Method       | Returns        | Purpose                             |
| ------------ | -------------- | ----------------------------------- |
| `.forEach()` | `undefined`    | Just loops (for side effects)       |
| `.map()`     | New array      | Transforms each element             |
| `.filter()`  | New array      | Keeps elements that match condition |
| `.find()`    | Single element | Returns the first that matches      |
| for.. of     | string         | loops                               |
| .split       | Arrray from strings                                  |
| .join        | Strings from array

*/

//OTHERS Method
//arr.some(fn)/arr.every(fn) check the array.
//similar to || && operators. if fn return true, arr.some(fn) will return true and stops iterating. if fn return false, arr.every(fn) return false and stop iterating

function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}
console.log(arraysEqual([1, 2], [1, 2])); // true

//arr.fill(value, start, end) – fills the array with repeating value from index start to end.

//arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

//arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

/** TASK 1
 * Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
 */

let strings = 'background-color';

function camelize(str) {
  let splitter = str
    .split('-')
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    );
  console.log(splitter);
  return splitter.join('');
}
console.log(camelize(strings));

/**TASK 2
 * Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) */

let numbres = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}
let filtered = filterRange(numbres, 1, 4);
console.log(filtered);
console.log(numbres);

/**TASK 3
 * Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
 */
let arr7 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr7, 1, 4);
console.log(arr7);

/** TASK 4
 * Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
 */

let arr8 = [5, 2, 1, -10, 8];

arr8.sort((a, b) => b - a);
console.log(arr8);
