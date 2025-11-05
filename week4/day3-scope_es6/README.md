# JavaScript Notes 

## Variable Scope
Global variables can be accessed and modified from anywhere in the code which can cause bugs and make debugging harder. Local variables declared with let or const are only visible in their block or function.

Example:
let globalVar = 10;
function badPractice() {
  globalVar = 20;
}
function goodPractice() {
  let localVar = 30;
  console.log(localVar);
}

## Overriding Built-In Functions
If a user defines a function with the same name as a built-in JavaScript function the local definition overrides the built-in one.
function alert() {
  console.log('hello');
}
alert(); // prints 'hello'
JavaScript searches for functions from inner scope to outer scope. The first match it finds is used.

## ECMAScript (JavaScript Versions)
JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997. ECMA stands for European Computer Manufacturer's Association. ECMAScript (ES) is the official standard JavaScript follows.

Timeline
ES1 - 1997 - First edition
ES2 - 1998 - Editorial changes only
ES3 - 1999 - Added try/catch and Regular Expressions
ES4 - never released
ES5 - 2009 - JSON, strict mode, array methods
ES6 - 2015 - let, const, arrow functions
ES16 (ES2025) - 2025 - Latest version approved June 2025

## Purpose of ECMAScript Updates
Language Improvement and Evolution - makes code cleaner and more efficient.
Compatibility - ensures code runs across browsers and devices.
Security Enhancements - protects against modern threats.
Performance Optimization - increases speed and reduces memory usage.

## ES6 (2015)
Goal: reduce the amount of code needed to perform common tasks.

Features introduced:
- let and const
- arrow functions
- default parameters
- spread operator
- template literals
- destructuring

Example:
const arr = [1, 2, 3];
for (let item of arr) {
  console.log(item);
}

## Arrow Functions
A compact way to define functions.

Syntax:
() => {}

Example:
function doubleNum(num) {
  return num * 2;
}
let doubleNum1 = (num) => { return num * 2; };

If there is one parameter parentheses are optional:
let doubleNum = num => num * 2;

If the function only returns one expression braces and return can be omitted:
let double = num => num * 2;

## Arrow Function Exercises
1. Divide two numbers with a default parameter
let divide = (num1, num2 = 1) => num1 / num2;
console.log(divide(6, 2)); // 3
console.log(divide(10)); // 10

2. Check if a number is even
let isEven = num => num % 2 === 0;
console.log(isEven(6)); // true
console.log(isEven(3)); // false

## Default Parameters
Allows parameters to have default values if no value or undefined is passed.
function multiply(a, b = 1) {
  return a * b;
}
multiply(5, 2); // 10
multiply(5); // 5

Before ES6 missing arguments caused NaN:
function multiply(a, b) {
  return a * b;
}
multiply(5); // NaN

## Spread Operator (...)
Used to copy, combine, or expand arrays and objects.

Example:
let array1 = [1, 2, 3];
let array2 = array1; // reference copy
let array3 = [...array1]; // new copy

array1.push('apple');

console.log(array1); // [1, 2, 3, 'apple']
console.log(array2); // [1, 2, 3, 'apple']
console.log(array3); // [1, 2, 3]

Key difference:
= copies the reference
... creates a new shallow copy

Object example:
const user = { name: 'Justin', role: 'Student' };
const updatedUser = { ...user, role: 'Cloud Architect' };

## Summary
Avoid global variables. Prefer local scope.
Use arrow functions for clean and short syntax.
Use default parameters to prevent undefined errors.
Use spread operator to clone arrays and objects safely.
ECMAScript keeps JavaScript modern, efficient, and secure.
