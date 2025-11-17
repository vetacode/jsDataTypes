/*
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
 */

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
