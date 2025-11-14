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
//WeakMap never express the content inside
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
  visitsCountMap.set(user, count + 1);
  return count + 1;
}

let goh = { name: 'John Goh' };
console.log(usersCount(goh));
console.log(usersCount(goh));
console.log(usersCount(goh));

console.log(visitsCountMap); // WeakMap {}. Value nya sama kaya pake Map dengan object yang sudah di removed (null). this is expected & intended with using WeakMap  no value inside
console.log(visitsCountMap.size); //undefined. isinya tetep ga bisa kedetect juga
goh = null;
console.log(visitsCountMap.size); //Object removed from WeakMap

/**
 * WEAKSET
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
 */

let visitedSet = new WeakSet();

let jong = { name: 'Jong' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

visitedSet.add(jong); // Jong visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(jong); // Jong again

// visitedSet has 2 users now

// check if Jong visited?
console.log(visitedSet.has(jong)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

console.log(visitedSet);

jong = null;

// visitedSet will be cleaned automatically

/** TASK 1
 * Store "unread" flags
importance: 5
There’s an array of messages:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

P.S. When a message is removed from messages, it should disappear from your structure as well.

P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
 */

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakSet();

function markAsRead(msg) {
  readMessages.add(msg);
}

function isRead(msg) {
  return readMessages.has(msg);
}

//mark messages as red
markAsRead(messages[0]);
markAsRead(messages[1]);
console.log(readMessages.size);

markAsRead(messages[0]);
console.log(readMessages.size); //the messaegs size is still same

console.log(
  `Message from ${messages[0].from} with text ${
    messages[0].text
  } has been red: ${isRead(messages[0])}`
);

messages.shift();
console.log(messages);

/**TASK 2
 * Store read dates
importance: 5
There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.
 */

let messages2 = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessage = new Map();

let date = new Date(2025, 1, 1);

readMessage.set(messages2[0], date);
console.log(readMessage);

console.log(readMessage.keys()); //resulting Iterator{}. it can be looped but its not array so cannot use .map(), .length or .filter().

console.log([...readMessage.keys()]); //so we use spread op with square bracket to make an array, then it can use arr method
let arrRead = [...readMessage.keys()];
console.log(arrRead[0]);
console.log(arrRead.length);

console.log(Array.from(readMessage));
