const greet = (name) => (`Hello ${name}! Welcome to Node!`)
console.log(greet("Sally Rodgers"))

const addNums = (num1, num2) => num1 + num2;
const subtractNums = (num1, num2) => num1 - num2;
const isNumber = (num) => !isNaN(parseInt(num));
const multiplyNumber = (num1, num2) => num1 * num2;

// module.exports = {
//   addNums,
//   subtractNums,
//   isNumber,
//   multiplyNumber
// };
// console.log(module)

export { 
    addNums, 
    subtractNums, 
    isNumber, 
    multiplyNumber
}