# JavaScript Notes: Numbers and Booleans

## Type Conversion and Coercion

Number(), parseInt(), and unary plus (+) can convert strings to numbers.
Number("42") → 42 (number)
parseInt("42") → 42 (number)
+"42" → 42 (number)

Type coercion happens automatically in some operations.
"5" + 5 → "55"
"5" - 5 → 0

## Boolean Conversion

Boolean() converts any value into true or false.

Falsy values:
false
0
""
null
undefined
NaN

Truthy values:
All other values including:
"0"
"false"
[]
{}

## Comparison Operators

== compares values with type coercion
=== compares values and types
!= means not equal
!== means not strictly equal

Examples:
10 == "10" → true
10 === "10" → false

## The NOT Operator (!)

Negates the boolean value of what follows it.
!true → false
!false → true
!"Hello" → false because "Hello" is truthy

## Primitive Data Types Reference

JavaScript primitive types:
Number
String
Boolean
Undefined
Null
Symbol
BigInt

## Exercises Completed

Created variables using numbers and booleans.
Ran basic arithmetic operations.
Practiced strict vs loose equality.
Converted user input to numbers for calculations.
