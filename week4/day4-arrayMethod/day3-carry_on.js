let answer1;
let x = 11;

if (x > 10) {
  answer1 = "greater than 10";
} else {
  answer1 = "less than 10";
}
console.log(answer1)

// becomes:
const answer = x > 10 ? "greater than 10" : "less than 10";

let userName;
let userInput = ''; // can be changed if user sets up their name

if (userInput) {
  userName = userInput;
} else {
  userName = 'please enter your name';
}

const userName1 = userInput || 'please enter your name';

const num1 = +"100";    // → 100 (integer)
const num2 = +"100.01"; // → 100.01 (decimal)


let myRegex2 = new RegExp("a|b");
let myRegex1 = /a|b/; // include either "a" or "b"

console.log(myRegex1.test("mission")); // false -> no "a" or "b" found
console.log(myRegex1.test("ready"));   // true  -> found "a"
console.log(myRegex1.test('hello world'))


//exercise 1 
///^[A-Z]\w{7,}$/
// pasword regex

// vanilla js
// document.getElementById("display").textContent = "Message";
// jQuery
// $("#display").text("Message");

// vanilla
// document.querySelector(".example").style.backgroundColor = "blue";
//jQuery
// $(".example").css("background-color", "blue");
