// const myModules = require('./myModules')
// import { addNums, subtractNums, isNumber, multiplyNumber } from "./myModules.js";
import * as myModules from './myModules.js';

console.log(myModules)
console.log(myModules.addNums(5, 3));    
console.log(myModules.subtractNums(10, 4));
console.log(myModules.isNumber("42"));
console.log(myModules.multiplyNumber(10, 4));

// console.log(addNums(5, 3));    
// console.log(subtractNums(10, 4));
// console.log(isNumber("42"));
// console.log(multiplyNumber(10, 4));

// exercise 1
const greet = (name) => (`Hello ${name}! Welcome to Node!`)
console.log(greet("Sally Rodgers"))