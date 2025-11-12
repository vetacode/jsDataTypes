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
console.log(num);

let numSort = num.sort(); //the default is sorted by string comparison
console.log(numSort); //sorted by strings as default (5 is the biggest)

//use the function to sort by number correctly
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
//convert string to Array of string/s

let names = 'Bilbo, Gandalf, Nazgul, Harry, Potter';

let arr3 = names.split(', '); //delimiter adalah apa yg mau dihilangkan dari string names, untuk membuat tiap string menjadi masing2 item tersendiri
console.log(names);
console.log(arr3);
console.log(arr3.length);

let arr4 = names.split(); //tanpa delimiter it will merged into 1 item
console.log(arr4);
console.log(arr4.length);

let arr5 = names.split(', ', 2); //it limits returned array length and ignore the rest
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

//JOIN: kebalikan split(), convert Array of strings to string
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
| Method       | Returns        | FROM            | Purpose                             |
| ------------ | --------------  ---------------- | ----------------------------------- |
| `.forEach()` | `undefined`    |                 | Just loops (for side effects)       |
| `.map()`     | New array      | Array           | Transforms each element             |
| `.filter()`  | New array      |                 | Keeps elements that match condition |
| `.find()`    | Single element |                 | Returns the first that matches      |
| for.. of     | string         |                 | loops                               |
| .split       | Arrray         | Strings         |
| .join        | Strings        | Array           |

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

console.log(arr8.sort((a, b) => b - a));
console.log(arr8);

/** TASK 5
 * Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
 */

let arr9 = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr9);
console.log(sorted);
console.log(arr9);

/** TASK 6
 * Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
 */

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };
  console.log(this);

  this.calculate = function (str) {
    let splitter = str.split(' '),
      a = +splitter[0],
      op = splitter[1],
      b = +splitter[2];

    console.log(splitter);

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b); //Look up the function for op in methods, call it with a and b, and return the result.
  };

  this.addMethods = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7')); // 10

calc.addMethods('*', (a, b) => a * b);
console.log(calc.calculate('4 * 5')); // 20

/**TASK 7
 * Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  /... your code/

alert( names ); // John, Pete, Mary */

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users3 = [john, pete, mary];

let names2 = users3.map((item) => item.name);

console.log(names2);

/**TASK 8
 * Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
/*

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
 */

let john2 = { name: 'John', surname: 'Smith', id: 1 };
let pete2 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary2 = { name: 'Mary', surname: 'Key', id: 3 };

let users4 = [john2, pete2, mary2];

let usersMapped = users4.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

/**TASK 9
 * Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
 */

let john3 = { name: 'John', age: 25 };
let pete3 = { name: 'Pete', age: 30 };
let mary3 = { name: 'Mary', age: 28 };

let arrai = [pete, john, mary];

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

let userSort = sortByAge(arrai);
console.log(userSort);
console.log(arrai[0].name);
console.log(arrai[1].name);
console.log(arrai[2].name);

/**TASK 10
 * Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

let arr1 = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr1));
console.log(shuffle(arr1));
console.log(shuffle(arr1));

//use Fisher-Yates Shuffles Method

let arr10 = [1, 2, 3];

function shuffle2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffle2(arr10));
console.log(shuffle2(arr10));
console.log(shuffle2(arr10));

/**TASK 11
 * Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */

let john4 = { name: 'John', age: 25 };
let pete4 = { name: 'Pete', age: 30 };
let mary4 = { name: 'Mary', age: 29 };

let arr11 = [john, pete, mary];

function getAverageAge(arr) {
  let arrAge = arr.reduce((a, b) => a + b.age, 0) / arr.length;
  return Math.round((arrAge * 100) / 100);
}

console.log(getAverageAge(arr11));

/** TASK 12 ==> Currently using slower solution, later in map and set will show how to optimize the performance
 * Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  / your code /
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
 */

function unique(arr) {
  let result = [];

  for (let string of arr) {
    if (!result.includes(string)) result.push(string);
  }
  return result;
}

let str = [
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

console.log(unique(str)); // Hare, Krishna, :-O

/**TASK 13
 * Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
/
Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.
 */

let users5 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arr) {
  return arr.reduce((a, b) => {
    a[b.id] = b;
    return a;
  }, {});
}

let usersById = groupById(users5);
console.log(users5);
console.log(usersById);

//Alternative: using for..of loop. same performance O(n)

function groupById2(arr) {
  const res = {};

  for (const user of arr) {
    res[user.id] = user;
  }
  return res;
}

console.log(groupById2(users5));

//other alternative: using Map to results non-string keys or better performance for frequent updates
const map = new Map(users5.map((u) => [u.id, u]));
console.log(map);
