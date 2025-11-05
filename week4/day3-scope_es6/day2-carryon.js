// get html elements
const numEl1 = document.getElementById('num1');
const numEl2 = document.getElementById('num2');
const resultEl = document.getElementById('result');
const buttonEl = document.getElementById('sum');

// listen for first input
numEl1.addEventListener('input', function (event) {
  console.log(numEl1.value); // log input value
  console.log(event.target.value); // same as above
  console.log(event); // full event obj
  n1 = event.target.value; // store first number
});

// listen for second input
numEl2.addEventListener('input', function (event) {
  n2 = numEl2.value; // store second number
});

// click event for button
buttonEl.addEventListener('click', function () {
  const sum = Number(n1) + Number(n2); // convert + add
  console.log('sum button clicked'); // debug log
  resultEl.textContent = `${n1} + ${n2} = ${sum}`; // show result
});

