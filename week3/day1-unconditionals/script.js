console.log("Hello, World!");

//Conditionals
//if statements
if (1 === 1) {
  console.log("This is true");
} else {
  console.log("This is false");
}

let x = 5;
if (x > 5) {
  console.log("x is greater than 5");

  // backup
} else if (x < 5) {
  console.log("x is less than 5");

  // if all else fails
} else {
  console.log("x is equal to 5");
}

//exercise 1
let value = 1;
if (value < 0) {
  console.log("value is negative");
} else if (value === 0) {
  console.log("value is zero");
} else {
  console.log("value is positive");
}

//exercise 2
let myString = "apple";

if (myString[0] === "a") {
  console.log(true);
} else {
  console.log(false);
}

myString[0] === "a" ? console.log(true) : console.log(false);

//exercise 3
const word = "g";

word.length > 5 ? console.log("too long") : console.log("short enough");

//the and operator &&
let isSunny = true;
let temperature = 25;

if (isSunny && temperature >= 25) {
  console.log("It's a sunny and warm day!");
} else {
  console.log("It's either not sunny or not warm enough.");
}

isSunny && temperature > 25
  ? console.log("It's a sunny and warm day!")
  : console.log("It's either not sunny or not warm enough.");

//the or operator ||
let hasPremiumSubscription = false;
let hasFreeTrials = false;

if (hasFreeTrials || hasPremiumSubscription) {
  console.log("You have access to premium account.");
} else {
  console.log("You don't have access to premium account.");
}

hasFreeTrials || hasPremiumSubscription
  ? console.log("You have access to premium account.")
  : console.log("You don't have access to premium account.");

//exercise 4
let age = 60;
let premiumMember = true;
let couponCode = false;
if (age >= 65 && (premiumMember || couponCode)) {
  console.log("you are eligible for a discount");
} else {
  console.log("you are not eligible for a discount.");
}

age >= 65 && (premiumMember || couponCode)
  ? console.log("You are eligible for a discount.")
  : console.log("You are not eligible for a discount.");

//switch statements
let fruit = "strawberry";

switch (fruit) {
  case "orange":
    console.log("the fruit is an orange");
    break;

  case "strawberry":
    console.log("the fruit is a strawberry");
    break;

  case "banana":
    console.log("the fruit is a banana");
    break;

  default:
    console.log("fruit not found");
}

let day = "friyay";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("It's a workday.");
    break;

  case "saturday":
  case "sunday":
    console.log("It's the weekend!");
    break;

  default:
    console.log("What the.");
}

// homework
let score = 69;
switch (true) {
  case score >= 90:
    console.log("A");
    break;          

  case score >= 80:
    console.log("B");
    break;

  case score >= 70:
    console.log("C");
    break;

  case score >= 60:
    console.log("D");
    break;

  default:
    console.log("F");
}