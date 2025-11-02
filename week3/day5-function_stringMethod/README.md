# JavaScript String Functions and Methods

Strings represent text in JavaScript and have built-in methods that let you inspect, search, and modify text.

## 1. length
Counts the number of characters in a string.
let word = "Hello";
console.log(word.length); // 5

## 2. toUpperCase() and toLowerCase()
Convert text to all uppercase or all lowercase.
let text = "hello";
console.log(text.toUpperCase()); // "HELLO"
console.log(text.toLowerCase()); // "hello"

## 3. trim()
Removes spaces from the beginning and end.
let messy = "   space   ";
console.log(messy.trim()); // "space"

## 4. includes()
Checks if a word or letter exists in a string.
let sentence = "I like coding";
console.log(sentence.includes("coding")); // true

## 5. indexOf()
Finds the position of a character or word in a string.
let fruit = "banana";
console.log(fruit.indexOf("a")); // 1

## 6. slice()
Extracts part of a string.
let word2 = "JavaScript";
console.log(word2.slice(0, 4)); // "Java"

## 7. replace()
Replaces one part of a string with another.
let text2 = "I like cats";
console.log(text2.replace("cats", "dogs")); // "I like dogs"

## 8. split()
Splits a string into an array using a separator.
let fruits = "apple,banana,orange";
console.log(fruits.split(",")); // ["apple", "banana", "orange"]

## 9. concat()
Joins multiple strings together.
let first = "Good";
let second = "morning";
console.log(first.concat(" ", second)); // "Good morning"

## 10. charAt()
Gets the character at a specific index.
let greet = "Hello";
console.log(greet.charAt(1)); // "e"

## 11. startsWith() and endsWith()
Check if a string starts or ends with certain text.
let file = "notes.txt";
console.log(file.startsWith("notes")); // true
console.log(file.endsWith(".txt")); // true

## 12. repeat()
Repeats a string a set number of times.
let laugh = "ha";
console.log(laugh.repeat(3)); // "hahaha"

## 13. substring()
Extracts a section of a string between two indexes.
let code = "JavaScript";
console.log(code.substring(4, 10)); // "Script"

## 14. toString()
Converts numbers or objects into strings.
let num = 100;
console.log(num.toString()); // "100"

## 15. Template literals
Use backticks to insert variables directly into strings.
let name = "John";
console.log(`Hello ${name}`); // "Hello John"

## Summary
String methods return new strings and never modify the original value.
They are used to clean, format, and search text effectively.
