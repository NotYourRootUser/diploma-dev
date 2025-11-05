// global example
let x = 'king'; // global scope
function b1() {
  if (true) {
    console.log(x); // accesses global x
  }
}
b1();

// scope layer demo
let myName = 'Reuben'; // global
function sayHi() {
  let myName = 'Obama'; // local to sayHi
  console.log(myName + ' says good morning'); // uses local version
  function sayHi2() {
    console.log(myName + ' says good morning again'); // inherits from sayHi scope
  }
  sayHi2();
}
sayHi();
// sayHi2(); // error: not in global scope

// nested shadowing demo
let fruit = 'apple'; // global
function makeJuice() {
  let fruit = 'banana'; // function scope
  if (true) {
    let fruit = 'mango'; // block scope
    console.log('inside block:', fruit); // mango
  }
  console.log('inside function:', fruit); // banana
}
makeJuice();
console.log('global:', fruit); // apple


// alert('alert')
function alert() {
    console.log('hello')
}
alert()
console.log(doubleNum(5))


// traditional function
function doubleNum (num) {
    return num * 2;
}

//arrow function expression
let doubleNum1 = (num) => { return num * 2; }
console.log(doubleNum1(10))

// single params do not require parantheses
let doubleNum2 = num => { return num * 2; }

// single line statement do not require {} and return
let doubleNum3 = num => num * 2;


let divideNum = (a, b) => a / b;

console.log(divideNum(6, 2)); // 3

let isEven = num => num % 2 === 0;
console.log(isEven(6))
console.log(isEven(3)) 