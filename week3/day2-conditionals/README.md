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
```js
typeof undefined   // "undefined"
typeof null        // "object"
typeof 123n        // "bigint"
typeof Symbol()    // "symbol"
```

## String to Number Conversions
Number  
parseInt  
parseFloat  
Unary plus  

Examples:
```js
Number("10")      // 10
parseInt("10px")  // 10
parseFloat("10.5") // 10.5
Number("10px")    // NaN
Number("")        // 0
```

## Truthy and Falsey Values

Falsey values:
false  
0  
-0  
0n  
""  
null  
undefined  
NaN  

Everything else is truthy

---

# Conditional Statements

```js
if (condition) {
  code
} else if (condition) {
  code
} else {
  code
}
```

Example:
```js
let x = 5;
if (x > 5) {
  console.log("x is greater than 5");
} else if (x < 5) {
  console.log("x is less than 5");
} else {
  console.log("x is equal to 5");
}
```

---

# Strict Equality
```js
===
!==
```

Examples:
```js
1 === "1" // false
1 == "1"  // true
```

---

# Ternary Operator
```js
condition ? resultIfTrue : resultIfFalse
```

Example:
```js
word[0] === "a" ? console.log(true) : console.log(false);
```

---

# Logical Operators

## AND `&&`
Both must be true

## OR `||`
At least one must be true

## NOT `!`
Flips true to false or false to true

---

## Parentheses Priority

```js
let x = 4;
let y = 2;
let z = 0;

if (x == 4 && (!(y == 1) || z == 0)) {
  console.log("It is true");
} else {
  console.log("It is false");
}
```

---

# Switch Statements

Switch checks exact values

```js
switch (value) {
  case option:
    code
    break
  default:
    code
}
```

Example:
```js
let fruit = "banana";

switch (fruit) {
  case "orange":
    console.log("the fruit is an orange");
    break;
  case "strawberry":
    console.log("the fruit is a strawberry");
    break;
  case "banana":
    console.log("the fruit is a banana");
    break;
  default:
    console.log("fruit not found");
}
```

---

# Exercises

## Exercise 1
Negative Zero or Positive check

## Exercise 2
Starts with a check

## Exercise 3
Word length check > 5

## Exercise 4
Discount eligibility check

## Exercise 5
Switch grade homework
```js
let score = 69;
switch (true) {
  case score >= 90: console.log("A"); break;
  case score >= 80: console.log("B"); break;
  case score >= 70: console.log("C"); break;
  case score >= 60: console.log("D"); break;
  default: console.log("F");
}
```

---

# Key Takeaways
- && requires both true  
- || requires one true  
- ! flips values  
- Parentheses run first  
- Switch is a specific if else if  
- Break prevents fall through  
- Ternary is for short conditions  
