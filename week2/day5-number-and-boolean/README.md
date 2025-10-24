JavaScript Notes – Day 5 (Strings, Booleans, Comparison, and Basic Operations)

1. Type Conversion and Coercion

- `Number()`, `parseInt()`, and unary `+` can convert strings to numbers.
- `Number("42")` → 42 (number)
- `parseInt("42")` → 42 (number)
- Unary plus (`+"42"`) is shorthand for `Number("42")`.
- Type coercion happens automatically in some operations (like `"5" + 5` → `"55"`).

2. Boolean Conversion and Falsy Values

- `Boolean()` converts any value into `true` or `false`.
- Falsy values: false, 0, "", null, undefined, NaN.
- Truthy values: everything else (including "0", "false", [], {}, etc.).
- Example: `Boolean(0)` → false, `Boolean("0")` → true.

3. Comparison Operators

- `==` compares values after coercion (loose equality).
- `===` compares both value and type (strict equality).
- `!=` means “not equal”, `!==` means “not strictly equal”.
- Example: `10 == "10"` → true, `10 === "10"` → false.

4. The NOT Operator (!)

- Negates the boolean value of what follows it.
- `!true` → false, `!false` → true.
- Works with coercion too: `!"Hello"` → false, because "Hello" is truthy.

5. Primitive Data Types

- JavaScript has 7 primitive types: Number, String, Boolean, Undefined, Null, Symbol, and BigInt.
- Example: `let age = 25; let name = "Reuben"; let happy = true;`

6. Strings and Quotes

- Three ways to define strings: single (' '), double (" "), and backticks (` `).
- Backticks (template literals) allow multi-line strings and variable embedding with `${}`.
- Example: `` `Hello, ${name}` `` outputs: Hello, Reuben.

7. Escape Characters

- `
` for new line, `	` for tab, `\` for backslash.
- Example: `"Name:	John"` → adds a tab space.

8. String Concatenation and Template Literals

- Before ES6, strings were joined with `+` (e.g., `'Hello ' + name`).
- After ES6, template literals simplified concatenation: `` `Hello ${name}` ``.
- `" "` (a space in quotes) is needed when using `+` to separate words.
- Example: `'Hello ' + name + '!'` → “Hello Reuben!”

9. String Length and Indexing

- `.length` gives number of characters in a string.
- Indexing starts at 0.
- `myMessage[0]` gives the first character.
- `myMessage[myMessage.length - 1]` gives the last character.
- `.at(-1)` also returns the last character.

10. Exercises Covered

- **Exercise 3**: Created and concatenated four strings using template literals, then printed total length.
- **Exercise 4**:
  - Calculated Buddy’s BMI: `weight / (height * height)`.
  - Calculated book purchase cost using variables and template literals.
  - Example Output: “You have 5 books, total price is $50.”
