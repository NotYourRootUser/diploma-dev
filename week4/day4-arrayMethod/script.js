console.log(2)

const icecreams = ["vanilla", "chocolate", "matcha"];

// push()
const pushMethod = icecreams.push("rainbow");
console.log(pushMethod)//4   |adds the item to the end, returns new length.
console.log(icecreams)//['vanilla', 'chocolate', 'matcha', 'rainbow']

//pop()
const popMethod = icecreams.pop();
console.log(popMethod)//rainbow  |removes and returns last item
console.log(icecreams)// ['vanilla', 'chocolate', 'matcha']

// unshift()
const unshiftMethod = icecreams.unshift("tiramisu");
console.log(unshiftMethod)//4 |adds the item to the begin, returns new length .
console.log(icecreams)// ['tiramisu', 'vanilla', 'chocolate', 'matcha']

// shift()
const shiftMethod = icecreams.shift();
console.log(shiftMethod)//tiramisu | removes and returns first item.
console.log(icecreams)// ['vanilla', 'chocolate', 'matcha']

// split()
const icecreamSplit = "vanilla chocolate matcha";
const result = icecreamSplit.split(" ");
console.log(result);

// array.join()
const joinedArray = result.join("/");
console.log(joinedArray)

// aray.slice()
const sweet = icecreams.slice(1, 3);
console.log(sweet);
//exercise
const sliceEx = ['html', 'css', 'JS', 'react'];
const sliced = sliceEx.slice(2,3);
console.log(sliced)

// array.splice
const team = ["Alice", "Bob", "Charlie"];
const removed = team.splice(1, 1, "Diana"); 
console.log(removed); // ["Bob"]
console.log(team);    // ["Alice", "Diana", "Charlie"]


// .forEach()
const icecreamsForEach = ["vanilla", "chocolate", "blueberry"];

icecreamsForEach.forEach(function(e, index, array) {
  console.log(`${index + 1} : ${e}`);
  console.log(`${e} icecream, please order ${index + 1}`);
});


const originalArray = [3, 8, 12, 17, 22];
const newArray = [];

originalArray.forEach(function(number) {
  const doubled = number * 2;
  newArray.push(doubled);
});

console.log(newArray);

const icecreamsMap = ["vanilla", "chocolate", "blueberry"];

const orderedIcecreams = icecreamsMap.map(function (icecream, index) {
  return `Flavour ${index}: ${icecream}`;
});

console.log(orderedIcecreams);

let original = [[10], [20]];
let copy = [...original];
copy[0][0] = 999;

console.log(original);
console.log(copy);
