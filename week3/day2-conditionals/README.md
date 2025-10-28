# JavaScript Fundamentals

This summarizes current JavaScript concepts covered today including data types, conversions, truthy and falsey values, equality, and conditionals.

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

---

# Type Conversion

## String to Number
Number  
parseInt  
parseFloat  
Unary plus

```js
Number("10")      // 10
parseInt("10px")  // 10
Number("10px")    // NaN
Number("")        // 0
```

## Implicit Coercion
```js
"10" + 5   // "105" (string + forces concatenation)
"10" - 5   // 5 (forces number)
true + 1   // 2
```

---

# Truthy and Falsey

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

# Statements vs Expressions
Statement = action  
Expression = produces a value

```js
let x = 5        // statement with expression
3 + 4            // expression → 7
console.log(x)   // statement (side effect)
```

---

# Increment Operators

```js
let a = 5;

console.log(a++) // logs 5 then becomes 6 (postfix returns old value)
console.log(++a) // becomes 7 then logs 7 (prefix returns new value)
```

---

# Logical Operators

## AND &&
Both must be true  
Short-circuits on the first false  
```js
false && "hello"  // false
true && "hi"      // "hi"
```

## OR ||
At least one must be true  
Short-circuits on the first true  
```js
true || "world"   // true
0 || "ok"         // "ok"
```

## NOT !
Flips boolean value  
```js
!true   // false
```

---

# Strict vs Loose Equality

Strict:
```js
=== and !==
1 === "1" // false
```

Loose:
```js
== and !=
1 == "1" // true
0 == false // true
"" == false // true
null == undefined // true
```

Note: Loose equality can behave unexpectedly

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

## Parentheses Priority

Parentheses run first so you can control the order of evaluation.

Example:
```js
let x = 4;
let y = 2;
let z = 0;

if (x === 4 && (!(y === 1) || z === 0)) {
  console.log("It is true");
} else {
  console.log("It is false");
}
```

Breakdown of evaluation order:
1. `(y === 1)` is checked first  
2. `!(y === 1)` flips the result  
3. Then `(!(y === 1) || z === 0)` runs  
4. Finally `x === 4 && (that result)`

The parentheses ensure `!(y === 1)` happens before the OR check, and the entire OR group happens before the AND check.

---

# Ternary Operator

```js
condition ? trueCase : falseCase
```

Example:
```js
word[0] === "a" ? console.log(true) : console.log(false);
```

---

# Switch Statements

Exact match checks
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
  case "orange": console.log("orange"); break;
  case "banana": console.log("banana"); break;
  default: console.log("fruit not found");
}
```

---

# Exercises (Covered)

1. Negative Zero or Positive check
2. Word starts with letter check
3. Word length check > 5
4. Discount eligibility check
5. Switch grade homework
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
- && needs both true  
- || needs one true  
- ! flips values  
- Short-circuiting affects returned value  
- Parentheses run first in logic  
- Switch is a specific if else if  
- Break stops fall-through  
- === avoids weird coercion  
