# JavaScript Objects and Arrays Notes

## 1. Objects

Objects store key and value pairs that describe a single entity.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

Term | Meaning
---- | --------
Object | Container holding key and value pairs
Key or Property Name | The label before the colon
Value | The data stored for that key
Property | A single key and value pair


## 2. Accessing Object Properties

Dot notation
person.firstName; // "John"

Bracket notation
person["firstName"]; // "John"

Use brackets when:
- The key has spaces ("favorite food")
- The key is stored in a variable

const key = "lastName";
console.log(person[key]); // "Doe"


## 3. Modifying, Adding, and Deleting

person.age = 31;           // modify
person.job = "Designer";   // add new property
delete person.lastName;    // delete property

Works with both let and const  
You cannot replace the entire object if it is const


## 4. const vs let Objects

Action | const | let
------- | ------ | ----
Change a property | yes | yes
Add a property | yes | yes
Delete a property | yes | yes
Replace whole object | no | yes

Rule:
const locks the variable name, not the data inside it


## 5. Template Literals

Use backticks and ${} for cleaner strings

console.log(`${person.firstName} is ${person.age} years old.`);


## 6. Arrays

Arrays store multiple values in a specific order.

const food = ["mango", "bubble tea", "fried chicken"];

Concept | Description
-------- | -----------
Array | Ordered collection of items
Index | Numeric position (starts at 0)
Element | Individual value inside array


## 7. Accessing and Changing Array Elements

food[0];        // "mango"
food[2] = "ramen";  // modify value

Variable first, then index  
[0]food is invalid syntax


## 8. Adding and Removing Items

food.push("pizza"); // add to end
food.pop();         // remove last

push can add multiple items:
food.push("steak", "sushi");

push returns the new length of the array.


## 9. Arrays and const

const colors = ["red", "blue"];
colors.push("green"); // allowed
colors = [];          // error

Same rule as objects  
Mutable inside but reference fixed.


## 10. Array Inside Object

const recipe = {
  title: "Brownies",
  ingredients: ["milk", "cocoa", "flour"]
};

recipe.ingredients.push("sugar");
console.log(recipe.ingredients[2]); // "flour"

Nested structure  
recipe → ingredients → array inside object


## 11. Arrays of Objects

const pets = [
  { name: "Buddy", type: "dog" },
  { name: "Misty", type: "cat" }
];

console.log(pets[1].name); // "Misty"

Access pattern  
[index] then .property


## 12. Array Properties and Length

food.length;              // total items
food[food.length - 1];    // last item


## 13. Average Example

Manual calculation
const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
const average = sum / numbers.length;

Using reduce
const avg = numbers.reduce((a, b) => a + b) / numbers.length;


## 14. Differences Between Objects and Arrays

Feature | Object | Array
-------- | ------- | ------
Structure | key : value | ordered list
Key type | string | number index
Order guaranteed | no | yes
Best for | Describing one thing | Listing multiple things
Example | { name: "John" } | ["John", "Jane"]


## 15. Common Syntax Patterns

object.key  
object["key"]  
array[index]  
object.array[index]  
object.array.push("newItem")


## Summary

Objects describe one thing with properties  
Arrays list many things  
Dot and bracket notation let you access, add, modify, and delete  
const means you can change inside but not reassign  
push, pop, and length are used to manage arrays  
Combining objects and arrays creates real-world data structures
