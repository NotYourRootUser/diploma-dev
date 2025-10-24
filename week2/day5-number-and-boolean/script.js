console.log("salutations");

let a = 10;
let b = 5;
let c = 11;

// addition:
console.log(a + b); // 15

// subtraction
console.log(a - b); // 5

// multiplication
console.log(a * b); // 50

// divistion
console.log(a / b); // 2

// exponentiation
console.log(a ** b); // 100000

// remainder
console.log(a % b); // 0
console.log(c % b); // 1

// assignment operater
a = a + 1;

//increment operater
a++; // add a (10) by 1
console.log(a);

// addition assignment operator
a += 1; // shortcut for a = a + 5;
console.log(a);

b--;
console.log(b);

// bigint
let largeNumber = 9999999999999999999999999;
console.log(largeNumber);
let bigint = 9999999999999999999999999n;
console.log(bigint);

console.log(typeof largeNumber);
console.log(bigint);

const str = "42";
console.log(typeof str); // string
const num1 = Number(str); // converts string to number

console.log(num1, typeof num1); // 42 'number'

const num2 = parseInt(str);
console.log(num1, typeof num1); // 42 'number'

const num = +str;
console.log(num1, typeof num1); // 42 'number'

// boolean true or false

console.log(Boolean(false));
console.log(Boolean(true));
console.log(Boolean(null));
console.log(Boolean(25));
console.log(Boolean(0));
console.log(Boolean("Hello World"));
console.log(Boolean(""));
let myVar;
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// ===== Comparisons =====
console.log(2 == 2); // true
console.log(2 == 3); // false
console.log(10 == 10); // true
console.log(10 == "10"); // true (string is coerced to number)
console.log(10 != 4); // true

// ===== Strict Comparison =====
console.log(10 === 10); // true (same type and value)
console.log(10 === "10"); // false (different types)
console.log(10 !== "10"); // true  (not equal because types differ)
console.log(10 !== 10); // false (same type and value)
