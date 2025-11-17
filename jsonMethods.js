/*
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
 */

//STRINGIFY
//Syntax: let json = JSON.stringify(value[, replacer, space])
//replacer is array of properties to mapping function(key, value)

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')); // "test"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

//IGNORED
let user = {
  sayHi() {
    // ignored
    console.log('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};
console.log(JSON.stringify(user)); // {} (empty object)

//use full syntax
let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup ==> circular references will be ignored

// console.log(JSON.stringify(meetup)); //error converting circular structure to JSON

console.log(
  JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])
);
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

//Use full syntax with function replacer
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == 'occupiedBy' ? undefined : value;
  })
);

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

//FORMATTING: Space
let user2 = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user2, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
