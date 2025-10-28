# JavaScript Fundamentals

This document summarizes key JavaScript concepts covered so far including data types, conversions, truthy and falsey values, and conditionals. It also includes exercises with initial and improved solutions.

## Primitive Data Types
1. string
2. number
3. boolean
4. undefined
5. null
6. symbol
7. bigint

## Additional Type
object

## Type Checking Examples
typeof undefined   // "undefined"
typeof null        // "object"
typeof 123n        // "bigint"
typeof Symbol()    // "symbol"

## String to Number Conversions
Number()
parseInt()
parseFloat()
Unary +

Examples:
Number("10")      // 10
parseInt("10px")  // 10
parseFloat("10.5") // 10.5
Number("10px")    // NaN
Number("")        // 0

## Truthy and Falsey
Falsey values:
false
0
-0
0n
""
null
undefined
NaN

Everything else is truthy.

## Conditional Statements
if (condition) {
  code
} else if (condition) {
  code
} else {
  code
}

Only the first true condition executes.

Example:
let x = 5;
if (x > 5) {
  console.log("x is greater than 5");
} else if (x < 5) {
  console.log("x is less than 5");
} else {
  console.log("x is equal to 5");
}

## Strict Equality
=== 
!==

1 === "1" // false
1 == "1"  // true

## Ternary Operator
condition ? resultIfTrue : resultIfFalse

Example:
word[0] === "a" ? console.log(true) : console.log(false);

Use ternary when the condition and action are simple.

------------------------------------------------------

# Exercises with Improvements and Notes

## Exercise 1: Negative, Zero, or Positive

Prompt:
Check if a value is negative, zero, or positive.

Initial Version:
let value = 1;

if (value < 0) {
  console.log("value is negative");
} else if (value === 0) {
  console.log("value is zero");
} else {
  console.log("value is positive");
}

Console:
value is positive

Note:
Correct use of strict equality.

------------------------------------------------------

## Exercise 2: First Letter is a

Prompt:
Check if a string starts with the letter a and print true or false.

Initial Version:
let myString = "apple";
if (myString[0] === "a") {
  console.log(true);
} else {
  console.log(false);
}

Improved Version:
myString[0] === "a" ? console.log(true) : console.log(false);

Advanced:
myString[0].toLowerCase() === "a" ? console.log(true) : console.log(false);

Alternative:
console.log(myString.toLowerCase().startsWith("a"));

------------------------------------------------------

## Exercise 3: Word Length Check

Prompt:
Check if a word is longer than 5 characters.

Solution:
const word = "hippopotamus";
word.length > 5 ? console.log("the word is too long") : console.log("the word is fine");

Console:
the word is too long

Note:
Correct use of ternary and .length method.

------------------------------------------------------

End of document.

