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
