//arr.splice can do insert, remove and replace elements.
//syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
let console = ['ps', 'xbox', 'nintendo'];

console.splice(0, 1, 'sega');
console.log(console);

console.splice(3, 0, 'ps', 'super nintendo');
console.log(console);

console.splice(-2, 2);
console.log(console);
