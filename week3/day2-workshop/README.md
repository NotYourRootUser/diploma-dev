# JavaScript Variables, Data Types, Operators, Logic
Workshop: Day 2 / Variables and Operators

## Primitive Data Types
Primitive types are simple single values stored directly in memory:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

Notes:
- Strings that look like booleans are still text.
- BigInt handles numbers too large for normal Number type.

Examples:
```js
console.log(true)      // boolean true
console.log("true")    // string containing characters
console.log(false)
console.log("false")

const falseString = "false"
```

## Non-Primitive (Reference) Types
Everything that is not a primitive is an object.
Examples: Object, Array, Function, Date, RegExp

Notes:
- Objects are stored by reference.
- Copying an object copies its reference, not the value.

Example:
```js
let a = { score: 50 }
let b = a
a.score = 99
console.log(b.score) // 99
```

## Arithmetic Operators
```js
let x = 10
console.log(x + 5)
console.log(x - 5)
console.log(x * 2)
console.log(x / 2)
console.log(x % 3)  // remainder
```

When does % become useful?
- Checking even or odd numbers
- Looping index resets
- Cycling through options

## String Concatenation and Type Coercion
```js
console.log("Hello " + "Justin")
console.log("10" + 5)   // 105 (string + number becomes string)
```

Why:
- Addition with strings forces concatenation

```js
console.log("10" - 5)   // 5 (forces numeric conversion)
```

## Type Conversion
```js
console.log(Number("5") + 3)  // 8
console.log(String(5) + "hello")  // "5hello"
```

Why subtraction converts:
- Subtraction only works with numeric values

## Postfix vs Prefix Increment
Postfix: use value first, then increment  
Prefix: increment value first, then use it

Example:
```js
let n = 2

console.log(n++) // prints 2, n becomes 3
console.log(n)   // prints 3

console.log(++n) // increments to 4 then prints 4
console.log(n)   // 4
```

Slide wording:
Postfix adds after printing.  
Prefix adds before printing.

## Conditionals: If / Else
```js
let num1 = 5
let num2 = 3

if (num1 > num2) {
    console.log('num1 is greater than num2')
} else {
    console.log('num1 is not greater than num2')
}
```

Logic flow:
- If condition is true, first block runs
- Otherwise else block runs

## Ternary Operator
Shorthand for if/else:
```js
condition ? resultIfTrue : resultIfFalse
```

Example:
```js
let str1 = "apple"
let str2 = "banana"

str1 === str2 ? console.log("equal") : console.log("No")
```

Notes:
- `===` is strict equality (checks type and value)
- Ternary is an expression, can be inline

## Statement vs Expression

### Expression
Produces a value.
Examples:
```js
5 + 2
x > 10
"hello"
num++
true ? "A" : "B"
```

### Statement
Performs an action and controls flow.
Examples:
```js
let x = 10
if (x > 5) { ... }
for (...) { ... }
```

Key summary:
Expressions return values.  
Statements perform actions.

### Important Note
Assignment is a statement that also returns the assigned value.
Example:
```js
let result = (x = 7)
console.log(result) // 7
```

That is why assignment can accidentally be used inside conditions.

## Best One-Line Definitions for Slides
Primitive: Basic data, stored by value.  
Reference: Objects stored by reference.  
Postfix: Print then add.  
Prefix: Add then print.  
If/Else: Decision based on true or false.  
Ternary: Short if/else that returns a value.  
Expression: Produces a value.  
Statement: Performs an action.
