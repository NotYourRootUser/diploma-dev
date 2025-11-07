# JavaScript & DOM - Notes 

## Array Methods Recap

### map()
creates a new array by applying a function to each element  
does not change the original array
```js
const items = ["apple", "bread", "coffee"];
const mapped = items.map(item => item.toUpperCase());
console.log(items);  // ["apple", "bread", "coffee"]
console.log(mapped); // ["APPLE", "BREAD", "COFFEE"]
```

### filter()
creates a new array with only elements that pass a condition
```js
const prices = [2.5, 5, 7.25, 1.5];
const affordable = prices.filter(price => price >= 2 && price <= 6);
console.log(affordable); // [2.5, 5]

const array4 = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = array4.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2,4,6,8,10]
```

### indexOf() & includes()
indexOf returns the position of a value in an array  
includes checks if a value exists in an array and returns true or false
```js
const fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("kiwi"));   // -1

const tools = ["hammer", "screwdriver", "wrench"];
console.log(tools.includes("hammer")); // true
console.log(tools.includes("saw"));    // false
```

### every() & some()
every tests if all elements meet a condition  
some tests if at least one element meets a condition
```js
const ages = [19, 35, 24, 55];
console.log(ages.every(age => age > 30)); // false
console.log(ages.some(age => age > 30));  // true
```

## Arrow Functions
`=>` is shorthand for defining functions.  
it’s the same as writing `function(word)` but shorter.
```js
array.map(word => word.toUpperCase());
```
curly braces `{}` are used if you have multiple statements or use return.

## String + Array Exercise (Title Capitaliser)
convert the first letter of each word to uppercase  
make the rest of the word lowercase
```js
let myString = "how aRe you FeeLing NOW?";
const splitString = myString.split(" ");
const result = splitString.map(word => 
  word[0].toUpperCase() + word.slice(1).toLowerCase()
);
console.log(result.join(" ")); // "How Are You Feeling Now?"
```

## 🛒 Shopping List Project

### HTML Layout
```html
<form id="shopping-list-form">
  <input type="text" id="item" placeholder="e.g. Tomato" required>
  x
  <input type="number" id="quantity" placeholder="e.g. 1" required>
  <button type="submit">Add to list</button>
</form>
<p id="shopping-list-display"></p>
```

### Selecting Elements
```js
const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");
```

### Handling Form Submission
```js
shoppingListForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(itemInputEl.value);
  console.log(quantityInputEl.value);
});
```
`event.preventDefault()` stops the page from refreshing on form submit.

### Adding Items
```js
const shoppingList = [];
shoppingListForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const shoppingListElement = {
    item: itemInputEl.value,
    quantity: quantityInputEl.value,
  };
  shoppingList.push(shoppingListElement);
  displayListItems();
  itemInputEl.value = "";
  quantityInputEl.value = "";
});
```

### Displaying the List
```js
function displayListItems() {
  shoppingListDisplayEl.innerHTML = "";
  shoppingList.forEach((entry, index) => {
    shoppingListDisplayEl.innerHTML +=
      `${entry.item} x ${entry.quantity} 
       <span onclick="deleteItem(${index});">❌</span><br>`;
  });
}
```
`<br>` adds a line break (same as `<br/>`).

### Deleting Items
```js
function deleteItem(index) {
  shoppingList.splice(index, 1);
  displayListItems();
}
```
splice(index, 1) removes one element starting at that index.

### Splice Example
```js
const array = ["apple", "banana", "peach", "mango"];
array.splice(0, 1);
console.log(array); // ["banana", "peach", "mango"]
```

### Final Combined Script
```js
const shoppingList = [];
const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");

shoppingListForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const shoppingListElement = {
    item: itemInputEl.value,
    quantity: quantityInputEl.value,
  };
  shoppingList.push(shoppingListElement);
  displayListItems();
  itemInputEl.value = "";
  quantityInputEl.value = "";
});

function displayListItems() {
  shoppingListDisplayEl.innerHTML = "";
  shoppingList.forEach((entry, index) => {
    shoppingListDisplayEl.innerHTML +=
      `${entry.item} x ${entry.quantity} 
       <span onclick="deleteItem(${index});">❌</span><br>`;
  });
}

function deleteItem(index) {
  shoppingList.splice(index, 1);
  displayListItems();
}
```

### Summary of Concepts Used
- Array.map() — transforms data  
- Array.filter() — filters by condition  
- Array.forEach() — loops through array  
- Array.splice() — removes item  
- Arrow functions (`=>`) — shorter syntax  
- event.preventDefault() — stops form reload  
- innerHTML += — adds HTML dynamically  
- DOM selection — getElementById()

By end of the session I had a working shopping list app that:
- adds items with quantity  
- displays them dynamically  
- deletes them with a ❌ icon  
- uses clean DOM + array logic
