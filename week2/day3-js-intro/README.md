# JavaScript Notes (Merged Update)

## Running JavaScript in a Browser
- `<script>` tag embeds JavaScript in HTML.
- Two ways to use:
  1. **Internal script:**
     ```html
     <script>
       // Write JS here
     </script>
     ```
  2. **External script:**
     ```html
     <script src="script.js"></script>
     ```

## Chrome DevTools Console
- Executes JavaScript and shows results.
- Used for debugging and testing.
- Example:
  ```js
  document.getElementById('hello').textContent = 'Hello, Console!';
  5 + 15;
  function add(a, b = 20) { return a + b; }
  add(25); // 45
  ```

## console.log()
- Outputs messages to the browser console.
- Example:
  ```js
  console.log("Hello World");
  ```

## Exercise 1
Goal: Learn how to declare and log variables.

### Part 1
```js
const firstAndLastName = "Justin Uaisele";
console.log(firstAndLastName);
```

### Part 2
```js
let age = 24;
console.log(age);
```

Key Ideas:
- const = cannot change (must be initialized immediately).
- let = can change later.
- Strings use quotes, numbers do not.
- console.log() prints values to check your code.

## Name That Variable (Best Practices)

- Use human-readable names: userName, shoppingCart.
- Avoid meaningless abbreviations: a, b, c.
- Be descriptive but concise:
  - bad: data, value
  - good: userData, totalValue
- Stay consistent across your project:
  - If using “user”, prefer currentUser and newUser (not visitor).

A variable name should describe what it stores, not how it’s used.

## Rules for Constructing Variable Names

1. Can contain letters, digits, underscore, and dollar sign.
2. Cannot begin with a digit.
3. Case-sensitive (aVariable ≠ avariable).
4. Cannot use reserved words (let, const, return, var, etc.).
5. Can begin with:
   - a letter → firstName
   - underscore → _lastName
   - dollar sign → $value
6. JavaScript convention = camelCase:
   ```js
   let firstName = "Justin";  // valid
   let first_name = "Justin"; // allowed, not preferred
   let first-name = "Justin"; // invalid
   ```

Memory Anchor:
JavaScript variable names = clean, clear, camel.

## Good vs Bad Naming Examples

| Good Names | Bad Names |
|-------------|-----------|
| age | 1 |
| myAge | a |
| initialColor | _12 |
| finalOutputValue | myage |
| audio1 | MYAGE |
| audio2 | var |
| | Document |
| | skjfndskjfnbdskjfb |
| | thisisareallylongstupidvariablenameman |

Why good names work: descriptive, short, consistent.
Why bad names fail: invalid, unclear, reserved, or overly long.

## Exercise 2
Goal: Use expressions with variables.

```js
// Variables

let currentYear = 2025;
let myBirthYear = 2001;
const ageCalc = currentYear - myBirthYear;

console.log(currentYear);
console.log(myBirthYear);
console.log(ageCalc);
```

Optional Improvement:
```js
let currentYear = new Date().getFullYear();
```
Automatically updates the year dynamically.

## Summary
- Use let for changeable data.
- Use const for fixed data.
- Use camelCase naming style.
- Avoid reserved keywords and unclear variable names.
- Test logic and values with console.log().
