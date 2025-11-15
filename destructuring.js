/**
 * Array destructuring
 * it copying array (also iterables) items into variabales
 * its not modified the array
Here’s an example of how an array is destructured into variables
 */

let arr = ['John', 'Smith'];

// destructuring assignment is the shorter syntax from using:
// let firstName = arr[0];
// let surname = arr[1];
let [firstName, surname] = arr;

console.log(arr); //not modify original arr
console.log(firstName); // John
console.log(surname); // Smith

//Kombinasi .split()
let nama = 'Ardi Bakri';
let [namaAwal, namaAkhir] = nama.split(' ');
console.log(namaAwal);
console.log(namaAkhir);

//Ignore elements using commas
//Unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName2, , title] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];
console.log(title); // Consul

//Working also for ITERABLES
let [a, b, c] = 'abc';
let abc = 'abc';
console.log(abc.split(''));
console.log(a);
console.log(b);
console.log(c);

let [satu, _, tiga] = new Map([
  [1, 'siji'],
  [2, 'loro'],
  [3, 'telu'],
]);

console.log(satu);
console.log(_);
console.log(tiga);

//Working on assigning object to the left-side
let person = {};

[person.name, person.age] = 'John 30'.split(' ');
console.log(person);
console.log(person.name);
console.log(person.age);

person.isAdmin = false;
console.log(person);

//Looping with Object.entries(): looping over keys-values of an obj
let user = {
  name: 'Pandu',
  age: 23,
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

//Looping Map
let map = new Map();

map.set(1, 'satu');
map.set('2', 'dua');
map.set('3', 3);

map;

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

let strings = 'strings';
for (let [key, value] of strings) {
  console.log(`${key}: ${value}`);
}

//Swap variables trick
let guest = 'May';
let admin = 'Jane';

[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);
