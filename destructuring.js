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

//REST '...'
let [num, word, ...rest] = ['satu', 'kata', 'apa', 'aja'];

console.log(num);
console.log(rest);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);

let [title1, title2, ...newTitles] = ['roman', 'jungle', 'viking', 'empire'];
console.log(newTitles);

//Default Values
let [namaDepan, namaBlkg] = [];
console.log(namaDepan); // undefined
console.log(namaBlkg); // undefined

let [namaDepan2 = 'Amir', namaBlkg2 = 'Khan'] = ['Rumi'];
console.log(namaDepan2); //diambil dari arr[0]
console.log(namaBlkg2); //diambil dari default =

//Object Desrtucturing
//Basic Syntax: let {var1,  var2} = {var1:... , var2:...}

let users = {
  name: 'Golang',
  age: 15,
  childNum: 2,
};

let { age, childNum, name, var2 } = users;
console.log(name);
console.log(var2);
console.log(childNum);
console.log(age);

//if we want to assign prop with different name:
let options = {
  title3: 'Menu',
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title3 } = options;

// width -> w
// height -> h
// title -> title

console.log(title3); // Menu
console.log(w); // 100
console.log(h); // 200

//combining the assignment with default values
let options2 = {
  title4: 'Menu',
};

let { width: w2 = 100, height: h2 = 200, title4 } = options2;

console.log(title4); // Menu
console.log(w2); // 100
console.log(h2); // 200

//REST pattern '...'
let naungan = {
  rumah: 1,
  tangga: 2,
  suami: 'ada',
  istri: 'ada',
};

let { rumah, tangga, ...pasangan } = naungan;

console.log(pasangan.suami);
console.log(pasangan.istri);

//if there is no let on the left, then should use bracket
let ranjang = {
  kasur: 'sama',
  bantal: 'ada',
  guling: 'ada',
  meja: 'ga ada',
};

let kasur, guling, meja, bantal;

({ kasur, bantal, guling, meja } = ranjang);

//NESTED DESTRUCTURING
let profesi = {
  dokter: {
    umum: 'impian mayoritas',
    hewan: 'mulia',
  },
  developer: ['frontEnd', 'backEnd'],
  penjahat: {
    maling: 'banyak',
    jambret: 'lebih banyak',
  },
  insinyur: ['kantoran', 'lapangan'],
  isHard: false,
};

let {
  dokter: { umum, hewan },
  developer: [type1, type2],
  insinyur,
  success = 'belum tentu',
  masuk_surga = 'apalagi',
  penjahat,
} = profesi;

console.log(hewan);
console.log(umum);
console.log(success);
console.log(umum);
console.log(penjahat.maling);
console.log(masuk_surga);
console.log(type1);
console.log(insinyur[0]);
console.log(insinyur[1]);

//SMART FUNCTION PARAMETERS
let pilihan = {
  makanan: {
    ada: 'Bakso',
    banyak: 'Mie Ayam',
  },
  isAda: 'ga ada',
  snacks: ['ciki', 'coklat'],
};

function mauMakan({
  judul = 'lapar',
  tesate = 'sate',
  makanan: { ada = 'nasi', banyak = 'rendang' } = {},
  isAda = 'zonk',
  snacks = ['krupuk', 'kripik'],
}) {
  [item1] = snacks;
  console.log(
    `ketika ${judul}, saya mau makan ${tesate} tapi malah ${isAda}. Terpaksa order ${ada} ${banyak}. Plus nyemil ${item1} dan ${snacks[1]} `
  );
}

mauMakan(pilihan);
mauMakan({});

/**TASK 1
 * Destructuring assignment
importance: 5
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
 */

let user3 = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user3;

console.log(name);
console.log(age);
console.log(isAdmin);

/**TASK 2
 * The maximal salary
importance: 5
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
 */

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  return ``;
}
