# JavaScript DOM and String Methods Notes

## 1. Browser Dialogs
- `alert()` shows a pop-up message to the user.
- `prompt()` asks the user for input and always returns a string.
- You can use `Number()` to convert the prompt result to a number.
- `typeof` checks the data type of a variable.

Example:
let age = prompt("Enter your age:");
console.log(typeof age); // string
console.log(Number(age)); // converts to number

## 2. String Methods
- `.toLowerCase()` changes all text to lowercase.
- `.toUpperCase()` changes all text to uppercase.
- `.trim()` removes spaces from both ends of a string.
- `.split()` divides a string into an array using a character as a separator.

Example:
"Hello World".toLowerCase(); // "hello world"
"test".toUpperCase(); // "TEST"
"   hello   ".trim(); // "hello"
"The quick brown fox".split(" "); // ["The","quick","brown","fox"]

## 3. Conditionals and Loops
- `if` and `else` decide which code runs based on conditions.
- `while` repeats code while a condition is true.
- Example program:
let userMessage = prompt("Enter a message:");
while (!userMessage) {
  alert("Not a valid input");
  userMessage = prompt("Please enter some text:");
}
const trimmedMsg = userMessage.trim();
if (trimmedMsg.length <= 10 && trimmedMsg.length > 0) {
  alert(trimmedMsg.toUpperCase());
} else if (trimmedMsg.length > 10) {
  alert(trimmedMsg.toLowerCase());
}

## 4. DOM (Document Object Model)
- The DOM represents the web page structure.
- `document` gives access to everything in the page.
- `document.body` points to the body of the HTML.
- `innerHTML` changes the HTML inside the body.
- `style` allows changing CSS using JavaScript.

Examples:
document.body.innerHTML = "<h1>Hello World</h1>";
document.body.style.background = "blue";

## 5. Functions and Events
- A function is reusable code defined with `function name()`.
- Functions can be connected to events like button clicks.
- Example:
function changeColour() {
  document.body.style.background = "blue";
}
<button onclick="changeColour()">Change Colour</button>

## 6. Bonus: Multiple Colours
- Arrays can store multiple colour values.
- Example:
const colourArray = ["white", "blue", "red", "green", "yellow", "orange"];
let currentColourIndex = 0;
function changeMultiColour() {
  document.body.style.background = colourArray[currentColourIndex];
  currentColourIndex++;
  if (currentColourIndex === colourArray.length) {
    currentColourIndex = 0;
  }
}
