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

# JavaScript DOM and Events Notes (Carried On)

## 1. getElementById()
- Used to select an element by its unique ID from HTML.
- Example:
  ```js
  const myDiv = document.getElementById("divId");
  ```
- It returns one element, not a list.

---

## 2. addEventListener()
- Attaches an event to an element so JS can respond when that event occurs.
- Example:
  ```js
  myDiv.addEventListener("mouseover", () => { ... });
  ```
- Syntax: `element.addEventListener("eventType", function);`
- The function runs automatically when that event happens.

---

## 3. Common Events
- `mouseover`: when mouse hovers over element  
- `mouseout`: when mouse leaves element  
- `click`: when user clicks on element  
- `input`: when user types into a text field  

---

## 4. Inline Functions vs Reusable Functions
**Inline function example:**
```js
myDiv.addEventListener("click", function() { 
  myDiv.style.background = "red"; 
});
```

**Reusable function example:**
```js
function changeColor() { 
  myDiv.style.background = "red"; 
}
myDiv.addEventListener("click", changeColor);
```

- Inline functions can’t be reused easily.  
- Reusable functions can be called for multiple elements.

---

## 5. The Event Parameter
- Every event listener function automatically gets an `"event"` parameter that holds information about what triggered it.
- Example:
  ```js
  function handleClick(event) {
    console.log(event);
  }
  myDiv.addEventListener("click", handleClick);
  ```
- The browser passes `event` automatically.

---

## 6. event.target
- Points to the exact HTML element that triggered the event.
- Example:
  ```js
  function changeToYellow(event) {
    event.target.style.background = "yellow";
  }
  myDiv.addEventListener("mouseout", changeToYellow);
  ```
- This allows the same function to work on multiple elements.
- `event.target` makes the function dynamic and reusable.

---

## 7. Getting Input Value
- The `input` event triggers every time the user types in a text box.
- Examp
