console.log("hello devs");

// function hoisting demo
console.log(addOne(100)); // 101

// primitive value copy
let a = 10;
let b = a;
console.log(a, b); // 10, 10

b = 20;
console.log(a, b); // 10, 20

// reference copy (arrays)
let arr1 = [1, 2];
let arr2 = arr1;
console.log(arr1, arr2); // [1, 2], [1, 2]

arr2.push(3);
console.log(arr1, arr2); // [1, 2, 3], [1, 2, 3]

// temporal dead zone
let temp;
temp = "scaler";
console.log(temp); // scaler

// function declaration
function addOne(num) {
  const answer = num + 1;
  return answer;
}
