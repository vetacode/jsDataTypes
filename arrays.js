//syntax creating empty array:
let arr = new Array();
let arr2 = [];

let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

console.log(fruits.length); // 3

console.log(fruits); // Apple,Orange,Plum

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

//push. Append the element to the end of the array:
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

alert(matrix[0][1]); // 2, the second value of the first inner array

//toString
