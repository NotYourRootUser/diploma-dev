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

function changeColour() {
  document.body.style.background = colourArray[index]; // set current colour

  index++; // move to the next one

  // when we reach the end of the array, reset to start
  if (index === colourArray.length) {
    index = 0;
  }
}

