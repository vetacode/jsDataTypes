//arr.splice can do insert, remove and replace elements.
//It mutates original arr
//syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
let console = ['ps', 'xbox', 'nintendo'];

console.log(console.splice(0, 1, 'sega')); //returns the romoved elements
console.log(console); //console arr mutates

console.splice(3, 0, 'ps', 'super nintendo');
console.log(console);

console.splice(-2, 2);
console.log(console);

//arr.slice. syntax: arr.slice([start], [end])
//it only copy the arr, not mutates the original arr

let fruits = ['apple', 'mango', 'banana', 'pear'];

console.log(fruits.slice(1, 3)); //copy from 1 to 3 (not include the index 3) ==> returns a new copy array
console.log(fruits); //the original array still intact (no mutation)

let newFruits = fruits.slice(); //shallow clone/copy entire arr
console.log(fruits === newFruits); //false
console.log(newFruits);

console.log(fruits.slice(-2)); //copy from -2 untill the end of arr
