// map() creates a new array by applying a function to each element
// the original array is not changed
const items = ["apple", "bread", "coffee"];
const mapped = items.map(item => item.toUpperCase());
console.log(items);   // same as before
console.log(mapped);  // uppercase version

// filter() creates a new array with elements that pass a test
// here it keeps only prices between 2 and 6
const prices = [2.5, 5, 7.25, 1.5];
const affordable = prices.filter(price => price >= 2 && price <= 6);
console.log(affordable);

// filter() again to keep only even numbers using % (remainder)
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = array4.filter(number => number % 2 === 0);
console.log(evenNumbers);

// indexOf() returns the position of a value in an array
// if not found, it returns -1
const fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("kiwi"));   // -1

// includes() checks if a value exists in an array
// returns true or false
// const tools = ["hammer", "screwdriver", "wrench"];
// // const userInput = prompt("Enter a guess!");
// // const result = tools.includes(userInput);
// console.log(result);
// console.log(tools.includes("hammer")); // true
// console.log(tools.includes("saw"));    // false

const ages = [19, 35, 24, 55];
console.log(ages.every(age => age > 30)); // false (19 and 24 fail)
console.log(ages.some(age => age > 30));  // true (35 and 55 pass)

let myString = "how aRe you feEling NOW?";
const splitString = myString.split(" "); // ["how", "aRe", "you", "feEling", "NOW?"]

const capitalizedWords = splitString.map(word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
});

const result = capitalizedWords.join(" ");
console.log(result); // "How Are You Feeling Now?"
