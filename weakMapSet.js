let john = { name: 'John' };

delete john.name; //delete can only be used to delete the props not the obj
console.log(john); //{}

john = null; //removed the obj john from memory
console.log(john); //null

//But if we put the obj reference into array, it wont we garbaged collected
let matt = { name: 'Matt' };
let array = [matt];
console.log(array);
matt = null; //remove matt ref
console.log(matt);
console.log(array);
console.log(array[0]); //but the obj inside the array is still there and we can get it (matt object) as an array[0]

//Sama juga kalo kita simpen di Map
let amy = { name: 'Amy' };

let map = new Map();
map.set(amy, '...');
console.log(map);

amy = null;
console.log(amy); //the obj has been removed from memory
console.log(map); //but Map still has it
console.log(map.keys());
console.log(Array.from(map.keys())); //we can get the array
console.log(Array.from(map.keys())[0]); //and we can get the object

//WEAKMAP: the keys must be OBJECTs not Primitives (like in Map)
//Fungsi utamanya adalah untuk additional data storage
let weakMap = new WeakMap();
let obj = {};
let weakObj = weakMap.set(obj, 'ok'); // works fine (object key)
console.log(weakObj);
// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object

let safir = { name: 'Safir' };

let batu = new WeakMap();
batu.set(safir, 'pelangi');
console.log(batu);

safir = null;
console.log(safir); //original object removed from memory
console.log(batu); //object also removed from WeakMap

/**
 * WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:
weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
 */

//Example of user that visit the web with usersCount function

let visitsCountMap = new WeakMap();

function usersCount(user) {
  let count = visitsCountMap.get(user) || 0;
  return visitsCountMap.set(user, count + 1);
}

let goh = { name: 'John Goh' };
console.log(usersCount(goh));

goh = null;
console.log(visitsCountMap);
