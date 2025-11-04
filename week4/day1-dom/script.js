// console.log('hrllo');
// console.log(document.body);
// console.log(document.title);

// document.body.innerHTML = document.body.innerHTML+ "<h1>Hello World</h1>";
// document.body.style.background = "yellow";

function changeColour() {
  // check current background
  console.log(document.body.style.background);

  // if the background is white or empty, turn it pink
  if (document.body.style.background === "" || document.body.style.background === "white") {
    document.body.style.background = "pink";
  } else {
    // else turn it back to white
    document.body.style.background = "white";
  }
} 

const colourArray = ['white', 'blue', 'red', 'green', 'yellow', 'orange'];
let index = 0; // start at first colour

function changeMultiColour() {
  document.body.style.background = colourArray[index]; // setting current colour

  index++; // move to next one

  // when reach end of array, reset to start
  if (index === colourArray.length) {
    index = 0;
  }
}

// Select all elements with the class "header-class"
const headerElAll = document.querySelectorAll(".header-class");

// Log what was selected (for debugging in console)
console.log(headerElAll);

// Loop through each element and apply styles
for (let i = 0; i < headerElAll.length; i++) {
  headerElAll[i].style.background = "purple";
  headerElAll[i].style.color = "white";
  headerElAll[i].style.fontSize = "30px";
  headerElAll[i].style.borderRadius = "20px";
  headerElAll[i].style.padding = "10px";
  headerElAll[i].style.textAlign = "center";
}

// Optional example function to dynamically change all backgrounds again
function changeColours() {
  for (let i = 0; i < headerElAll.length; i++) {
    headerElAll[i].style.background = "hotpink";
  }
}

// Example function that cycles colours
let colours = ["red", "blue", "green", "yellow", "orange"];
let current = 0;

function changeMultiColour() {
  for (let i = 0; i < headerElAll.length; i++) {
    headerElAll[i].style.background = colours[current];
  }
  current = (current + 1) % colours.length;
}

let count = 0;

function incrementByOne() {
  count++; // add 1
  document.getElementById("counter").textContent = count;
}

const myDiv = document.getElementById("divId");

// first event
myDiv.addEventListener("mouseover", function () {
  myDiv.style.background = "pink";
});

// second event
function changeToYellow() {
  myDiv.style.background = "yellow";
}
myDiv.addEventListener("mouseout", changeToYellow);

// third event
myDiv.addEventListener("click", function () {
  myDiv.style.background = "purple";
});

const inputEl = document.querySelector("input");

function logValue(e) {
  console.log(e); //  The full event object
  console.log(e.target); // The element that fired the event
  console.log(e.target.value);  //  actual text value inside it
}

inputEl.addEventListener("input", logValue);

// Step 1: Select elements
const input2 = document.getElementById('input-2');
const span2 = document.getElementById('span-2');

// Step 2: Add event listener for every key typed
input2.addEventListener('input', (event) => {
  // Step 3: Update character count
  const length = event.target.value.length;
  span2.textContent = length;
});
