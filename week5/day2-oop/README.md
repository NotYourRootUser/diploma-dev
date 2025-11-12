# JavaScript Execution Context Notes

## global execution context (gec)
- created automatically when js file runs  
- consists of two parts:  
  - **memory (variable environment):** stores all variables and functions as key:value pairs  
  - **execution (thread):** runs code line by line  

## memory creation phase
1. engine scans the code  
2. creates the global object (`window` in browser)  
3. creates `this` keyword (points to global object)  
4. sets up memory for variables and functions  
   - `var` → initialized with `undefined`  
   - `let` / `const` → exist but uninitialized (in tdz)  
   - `function` → full code stored in memory  

## execution phase
- runs line by line  
- executes assignments and expressions  
- creates a **new execution context** every time a function is called  
- destroys that context once the function returns  

## function / local execution context
each function call has its own:
- **memory space:** holds local variables and parameters  
- **execution thread:** runs function code line by line  
- when function ends, context is removed from call stack  

## temporal dead zone (tdz)
- period between variable creation and initialization  
- variable exists but can’t be accessed  
- prevents bugs from using values before declaration  

example:
~~~js
console.log(temp); // referenceerror
let temp = "scaler";
console.log(temp); // "scaler"
~~~

## var vs let vs const
| keyword | initialized early? | scope | access before declaration |
|----------|--------------------|--------|----------------------------|
| var | yes → `undefined` | function | allowed (undefined) |
| let | no (tdz) | block | not allowed |
| const | no (tdz) | block | not allowed |

## function hoisting
~~~js
console.log(addOne(5)); // works
function addOne(num) { return num + 1; }
~~~
- function declarations are hoisted with full body  
- ready to run before execution phase begins  

## function expressions & arrow functions
function *declarations* are hoisted, but expressions are **not**:
~~~js
console.log(addTwo(5)); // ❌ error
const addTwo = (num) => num + 2; // stored in tdz until line runs
~~~
arrow functions also inherit `this` from their outer scope (they don’t create their own).  

## value vs reference
~~~js
// primitives → copy by value
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10, 20

// objects → copy by reference
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1, arr2); // [1, 2, 3], [1, 2, 3]
~~~

## scope chain
- each function can access:
  - its **own variables**
  - variables from its **outer (parent) scopes**
  - the **global scope**
- when you reference a variable, js searches outward layer by layer until it finds it  

~~~js
let x = 10;
function outer() {
  let y = 20;
  function inner() {
    console.log(x + y); // 30
  }
  inner();
}
outer();
~~~
**→** inner() has access to both `y` (parent) and `x` (global).  

## lexical environment
- created whenever a new execution context is made  
- includes the function’s local variables + a reference to its parent environment  
- this chain forms the **scope chain**  

## call stack
- manages execution contexts  
- new function call → pushed to stack  
- function returns → popped off  
- when stack empty → program ends  

visual:
|----------------|
| addOne() EC | ← top of stack
|----------------|
| global EC | ← base
|----------------|


## summary mental model
1. js creates a global execution context first  
2. memory phase (setup variables, functions, tdz)  
3. execution phase (run line by line)  
4. new context for every function call  
5. contexts form a stack  
6. lexical environments connect them into a scope chain  

## key takeaways
- gec created first → memory phase → execution phase  
- functions create their own local contexts  
- tdz protects `let` and `const`  
- `var` is hoisted and risky  
- functions are fully hoisted  
- primitives copy by value, objects by reference  
- scope chain links nested environments  
- call stack controls execution order  
