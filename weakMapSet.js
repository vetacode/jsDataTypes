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
