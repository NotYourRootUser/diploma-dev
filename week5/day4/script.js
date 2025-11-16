 "use strict";  // strict mode enabled 

// let public = 100; Uncaught SyntaxError: Unexpected strict mode reserved

// x = 9; Uncaught ReferenceError: x is not defined

let missSpelledVariable = 1;
console.log(missSpelledVariable)

function nonSrictFunction() {
    console.log(this)
}
nonSrictFunction()

const person = {
    name: "Alice",
    greet: function () {
        console.log(`${this.name} say good morning`)
    }
}
