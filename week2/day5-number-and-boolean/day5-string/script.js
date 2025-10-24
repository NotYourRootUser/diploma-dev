console.log("String");

const str1 = "It's a great day!";
const str2 = 'He said, "Hello"';

const multiLineStr = "Line 1\nLine 2"; // \n creates a new line
console.log(multiLineStr);
const tabbedStr = "Name:\tJohn"; // \t creates a tab space
console.log(tabbedStr);
const path = "C:\\Program Files\\App";
console.log(path);

// Multi-line Strings
const multilineString = `This is line one
This is line two`;
console.log(multilineString);

// String Interpolation (after 2015)
const myName = "John";
const greeting = `Hello, ${myName}!`;
console.log(greeting);

// Concatenating String (before 2015)
const myName2 = "Sally";
const greeting2 = "Hello, " + myName2 + "!";
console.log(greeting2);

// Type coercion example
const result = 1 + "2";
console.log(result, typeof result); // "12" string

// string len
const myMessage = "Teapot";
console.log(myMessage.length);

console.log(myMessage[0]); // T
console.log(myMessage[1]); // e
console.log(myMessage[2]); // a
console.log(myMessage[3]); // p
console.log(myMessage[4]); // o
console.log(myMessage[5]); // t

console.log(myMessage.length - 1); // last index

// Exercise 3

const part1 = `"Concentrate all your thoughts`;
const part2 = "upon the work at hand. The sun's rays do not burn";
const part3 = 'until brought to a focus."';
const part4 = `- Alexander Graham Bell`;
2;

const full = `${part1}\n${part2}\n${part3}\n${part4}`;
console.log(full);
console.log(full.length);

const full2 = part1 + " " + part2 + " " + part3 + " " + part4;
console.log(full2);

const height = 1.83;
const weight = 100;
console.log(weight / (height * height));

const book = 5;
const total = 5 * 10;
console.log(total);
console.log(`You have ${book} books, total price is $${total}.`);
