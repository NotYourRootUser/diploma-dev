console.log('Hello');

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let myString = 'Responsiveness'
for (let i = 0; i < myString.length; i++) {
console.log(myString[i]);
}

const food = ['salad', 'pie', 'pickles', 'scones'];
for (let i = 0; i < food.length; i++)
    console.log(`I like ${food[i]}`);

const breakfast = ['bacon', 'pie', 'eggs', 'pancake']

for (let i = 0; i < breakfast.length; i++) {
    console.log(breakfast);
}
for (const e of breakfast ) {
    console.log(`i love  ${e}`);
}


const numberArray = [7, 13, 26, 49, 55];
let sum = 0; // Start total at zero

for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);             // shows each number in the array
  sum = sum + numberArray[i];              // adds that number to the running total
  console.log("The sum now is: " + sum);   // shows how the total grows each loop
}

for (const e of numberArray) {
    // total = total = e
    sum += e;
}

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
