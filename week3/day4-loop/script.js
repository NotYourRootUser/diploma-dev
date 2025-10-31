// print hello
console.log('Hello');

// countdown from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// loop through each letter in a string
let myString = 'Responsiveness';
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// loop through array and print each food
const food = ['salad', 'pie', 'pickles', 'scones'];
for (let i = 0; i < food.length; i++) {
  console.log(`I like ${food[i]}`);
}

// print whole array then print one by one using for...of
const breakfast = ['bacon', 'pie', 'eggs', 'pancake'];

for (let i = 0; i < breakfast.length; i++) {
  console.log(breakfast);
}

for (const e of breakfast) {
  console.log(`i love ${e}`);
}

// add up numbers in an array
const numberArray = [7, 13, 26, 49, 55];
let sum = 0;

for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
  sum = sum + numberArray[i];
  console.log("The sum now is: " + sum);
}

//  for...of
for (const e of numberArray) {
  sum += e;
}

console.log("final total:", sum);

// while loop 
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// continue
const users = [
  { name: "jane", role: "guest" },
  { name: "mark", role: "member" },
  { name: "lisa", role: "admin" }
];

for (let user of users) {
  if (user.role === "guest") {
    continue; // skip guests
  }
  console.log("Checking", user.name);
}

// break
const moreUsers = [
  { name: "alex", role: "member" },
  { name: "sarah", role: "banned" },
  { name: "tom", role: "member" }
];

for (let user of moreUsers) {
  if (user.role === "banned") {
    console.log("Access denied");
    break; // stop loop
  }
  console.log("Access granted to", user.name);
}


let x = 0;

while (true) {  // true meanss "run forever" till stoped
  if (x === 3) {
    console.log('x is now 3');
  }

  if (x === 10) {
    console.log('x is now 10');
  }

  if (x === 15) {
    console.log('x is now 15, goodbye...');
    break; // break stops loop completely
  }

  x++; // increase x each time so it doesn’t stay stuck
}

console.log("Exercise 8");
 
const myString2 = "Hell@ the#e";

for (let i = 0; i < myString2.length; i++) {
  if (myString2[i] == "@") {
    console.log("Error: Wrong character found! -> " + myString2[i]);
    break;
  }
}

const myString3 = 'H!ello@o#Wo$rld' // string with letters + symbols
let result = '' // start empty string to store clean result

for (let i = 0; i < myString3.length; i++) { // loop through each character
  if ( myString3[i] === '!' || // skip bad symbols
       myString3[i] === '@' || 
       myString3[i] === '#' || 
       myString3[i] === '$'
  ) { 
    continue; // jump to next loop round
  }

  console.log(myString3[i]); // print each good letter
  result = result + myString3[i]; // add good letter to result
//   console.log(result); // show how result grows
}

console.log(result); // final output: HelloWorld

const student = {
  name: "Rob",
  age: 5,
  isAdmin: true,
};

for (const key in student) {
  console.log(key);            // prints: name, age, isAdmin
  console.log(student[key]);   // prints: Rob, 5, true
}

const user = {
    name: 'Jonh',
    age: 5,
    isAdmin: true
};

for (const key in user) {
    if (key === 'age') {
    console.log(user[key]);
    break;
    }
}


// create an object with your favourite numbers
const myFavNums = {
  num1: 10,
  num2: 11,
  num3: 12,
};

// start total at zero
let total = 0;

// loop through each key in the object
for (const key in myFavNums) {
  total += myFavNums[key]; // add each value to total
}

// log the sum at the end
console.log(total); // prints 33
