// defines function named myFirstFunction
function myFirstFunction() {
    console.log('I just called my first function');
}
// calls function so it runs the code above
myFirstFunction(); 

// defines function with one parameter called parameters
function greet(parameters) {
    console.log('Hello ' + parameters + '!');
}
// calls greet but does not pass a value so it prints "Hello undefined!"
greet();

// defines a function with two parameters num1 and num2
function funWithParams(num1, num2 = 1) { // num2 = 1 give default value
    console.log(num1 + num2);
}
// calls funWithParams and passes 100 and 400 as arguments
funWithParams(100, 400);

// exercise
function milkshakeBlender(magicmaterial1, magicmaterial2) {
    console.log(`My milkshake is made from ${magicmaterial1} and ${magicmaterial2}.`);
}
milkshakeBlender('spinach', 'milk')


// defines a function that adds two numbers and returns the result
function funcWithParams2(firstNum, secondNum = 1) {
    return firstNum + secondNum; // gives the sum back to whoever calls it
}

// logs the returned value to the console
console.log(funcWithParams2(3, 4)); // prints 7


function checkString(text) {
    return text === "" ? false : true;
}

console.log(checkString("milkshake")); // true
console.log(checkString(""));          // false


const person = {
  firstName: "John",
  lastName: "Doe",
  greeting: function(name) {
    console.log(`Hi ${name}, weather is good.`);
  }
};
person.gretting('Rob')