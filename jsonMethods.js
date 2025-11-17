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

//CUSTOM toJSON
let room2 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup2 = {
  title: 'Conference',
  room2,
};

console.log(JSON.stringify(room2)); // 23

console.log(JSON.stringify(meetup2));
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

//JSON.parse: to decode JSON-string
//Syntax: let value = JSON.parse(str[, reviver])
//reviver is optional function(key,value) and will be called for each (key, value) pair: transform the value
// stringified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);
console.log(numbers[1]); // 1

//ON the nested object
let userData =
  '{"name": "Amy", "age": 28, "isAdmin": true, "friends": [0,1,2,3]}';

let users = JSON.parse(userData);
console.log(users.friends[1]);

//Using Reviver
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(schedule.meetups[1].date.getDate()); // works!

/**TASK 1
 * Turn the object into JSON and back
importance: 5
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
 */

let user3 = {
  name: 'John Smith',
  age: 35,
};

let userObj = JSON.parse(JSON.stringify(user3));
console.log(userObj);
