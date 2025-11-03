// Step 1: ask for a sentence
let userMessage = prompt("Enter a sentence:");
console.log("raw input =", userMessage, "| type:", typeof userMessage);

// Step 2: trim spaces at start and end
let trimmedMessage = userMessage.trim();
console.log("trimmed =", trimmedMessage, "| length =", trimmedMessage.length);

// Step 3: store the number of characters
let messageLength = trimmedMessage.length;
console.log("message length =", messageLength);

// Step 4: decide what to do based on length
if (messageLength <= 10) {
  console.log("short string → uppercase:", trimmedMessage.toUpperCase());
  alert(trimmedMessage.toUpperCase());
} else {
  console.log("long string → lowercase:", trimmedMessage.toLowerCase());
  alert(trimmedMessage.toLowerCase());
}





// const str = 'The quick brown fox jumps pver the lazy dog';
// console.log(str.split(''))
// console.log(str.split(' '))

// Step 1: prompt user for input
let userMessage1 = prompt("Please enter some text!");
console.log("Raw input:", userMessage1);

// Step 2: trim spaces
let trimmedMsg1 = userMessage1.trim();
console.log("Trimmed:", trimmedMsg1);

// Step 3: if it's empty, keep asking
while (trimmedMsg1.length === 0) {
  alert("Not a valid input!");
  userMessage1 = prompt("Please enter some text!");
  trimmedMsg1 = userMessage1.trim();
}

// Step 4: decide what to show based on length
if (trimmedMsg1.length <= 10) {
  console.log("short string → uppercase:", trimmedMsg1.toUpperCase());
  alert(trimmedMsg1.toUpperCase());
} else {
  console.log("long string → lowercase:", trimmedMsg1.toLowerCase());
  alert(trimmedMsg1.toLowerCase());
}

