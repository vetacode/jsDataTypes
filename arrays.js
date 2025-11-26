//syntax creating empty array:
let arr = new Array();
console.log(Array.prototype === arr.__proto__);
let arr2 = [];

let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
console.log(fruits);
fruits[3] = 'Jambu';
console.log(fruits.length); // 4
console.log(fruits); // Apple,Orange,Pear,Jambu

// mix of values
let arr3 = [
  'Apple',
  { name: 'John' },
  true,
  function () {
    return 'hello';
  },
];

// get the object at index 1 and then show its name
console.log(arr3[1].name); // John

// get the function at index 3 and run it
console.log(arr3[3]());

//Get last elements with “at”. Syntax: arr.at(i)
console.log(fruits);
console.log(fruits[fruits.length - 1]);

// same as fruits[fruits.length-1]
console.log(fruits.at(-1));

//Methods pop/push, shift/unshift
//pop. Extracts the last element of the array and returns it:
console.log(fruits);

console.log(fruits.pop()); // remove "Pear" and log it
console.log(fruits); // Apple, Orange

//PUSH. Append the element to the end of the array:
console.log(fruits);
fruits.push('Pear');
console.log(fruits); // Apple, Orange, Pear

//shift. Extracts the first element of the array and returns it:
console.log(fruits.shift()); // remove Apple and console.log it
console.log(fruits); // Orange, Pear

//unshift. Add the element to the beginning of the array:
fruits.unshift('Apple');
console.log(fruits); // Apple, Orange, Pear

//Methods push and unshift can add multiple elements at once:
let fruits2 = ['Apple'];

fruits2.push('Orange', 'Peach');
fruits2.unshift('Pineapple', 'Lemon');
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits2);

//Array Internals
//Arrays is included in the Object's data types where there are only 8 data types in JS. But it is a special Object, with indexing and length traits
//For instance, it is copied by reference:
let fruits3 = ['Banana'];

let arr4 = fruits3; // copy by reference (two variables reference the same array)
console.log(arr4 === fruits3); // true

arr4.push('Pear'); // modify the array by reference
console.log(fruits3); // Banana, Pear - 2 items now

//LOOPS on Array is similar to Object
//old method:
let consoles = ['ps5', 'xbox', 'nintendo', 'sega'];

for (let i = 0; i < consoles.length; i++) {
  console.log(consoles[i]);
}

//Cool ways: for..of
for (let console of consoles) {
  console.log(console);
}

//Using for..in: (NOT RECOMMENDED FOR ARRAYS)
for (let key in consoles) {
  console.log(consoles[key]);
}
//NOTES: using for..in loop will have a problem with array-like objects, which will iterate on all of non-numeric object keys/props
//ONLY use for..in loops for generic objects, not Arrays

//LENGTH: is not the count of values in the array, BUT it is (max-index + 1)
let buah = [];
buah[123] = 'Apple'; //tambahkan 'Apple' pada index ke 123 di array buah

console.log(buah.length); // 124

console.log(buah.unshift('Pisang'));
console.log(buah); //['Pisang', undefined, ...,....,'Apple']

let arrNum = [1, 2, 3, 4, 5];

arrNum.length = 2; // truncate to 2 elements
console.log(arrNum); // [1, 2]

arrNum.length = 5; // return length back
console.log(arrNum[3]); // undefined: the values do not return

//Simplest way to clear Array:
arrNum.length = 0;
console.log(arrNum);

//NEW ARRAY
let array = new Array('Apple', 'Pear', 'etc');
let array2 = new Array(2); // will it create an array of [2] ?
console.log(array2[0]); // undefined! no elements.
console.log(array2.length); // length 2

//MULTIDIMENSIONAL ARRAY
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]); // 2, the second value of the first inner array

//toString
let arr5 = [1, 2, 3];

console.log(arr5); // 1,2,3
console.log(String(arr5) === '1,2,3'); // true

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

//Don’t compare arrays with ==
console.log([] == []); // false
console.log([0] == [0]); // false

console.log(0 == []); // true
console.log('0' == []); // false

//TASK1. Array copied by reference
let buah2 = ['apel', 'mangga', 'jambu', 'duren'];

let fruits5 = buah2;

fruits5.push('alpukat');
console.log(fruits5);
console.log(buah2);

/**TASK 2
 * Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
 */

let musicGenre = ['Jazz', 'Blues'];

musicGenre.push('Rock-n-Roll');
// delete musicGenre[1];
// musicGenre[1] = 'Classics';
musicGenre[Math.floor((musicGenre.length - 1) / 2)] = 'Classics';
musicGenre.shift();
musicGenre.unshift('Rap', 'Reggae');
console.log(musicGenre);

/** TASK 3
 * Calling in an array context
importance: 5
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
 */

let arrayy = ['a', 'b'];

arrayy.push(function () {
  return this;
});

let x = arrayy[2]();
console.log(x);

/** TASK 5
 * A maximal subarray
importance: 2
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n2) or even O(n) if you can.
 */

let arrei = [1, -2, 3, 4, -9, 6];
let arrei2 = [-1, 2, 3, -9];

let maxSum = 0;

function getMaxSubSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

getMaxSubSum(arrei2);
console.log(maxSum); //this is O(n2) solution

//Fastest solution O(n): Kadane’s algorithm
let card = [2, 3, -1, 5, -2, 1, 6];

function getMax(arr) {
  let totalMax = 0;
  let partialMax = 0;

  for (let item of arr) {
    //untuk setiap item pada arr (for each)
    partialMax += item; //tambahkean ke partialMax
    totalMax = Math.max(partialMax, totalMax); //save nilai maximum yg didapat
    if (partialMax < 0) partialMax = 0; //klo hasilnya negatif, cap di angka 0 minimum (jgn sampe negatif)
  }
  return totalMax;
}

console.log(getMax(card));

console.log(getMax([-1, 2, 3, -9])); // 5
console.log(getMax([-1, 2, 3, -9, 11])); // 11
console.log(getMax([-2, -1, 1, 2])); // 3
console.log(getMax([100, -9, 2, -3, 5])); // 100
console.log(getMax([1, 2, 3])); // 6
console.log(getMax([-1, -2, -3])); // 0
