// shopping list setup
const shoppingList = [];

// get elements
const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");

// add item(s) to list
shoppingListForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // split items by comma, clean them up
  itemInputEl.value
    .split(",")
    .map((i) => i.trim().toLowerCase())
    .forEach((i) => {
      shoppingList.push({
        item: i,
        quantity: +quantityInputEl.value,
      });
    });

  itemInputEl.value = "";
  quantityInputEl.value = "";
  displayListItems();
});

// show shopping list on page
function displayListItems() {
  shoppingListDisplayEl.innerHTML = ""; // clear old list
  shoppingList.forEach((entry, index) => {
    shoppingListDisplayEl.innerHTML += `
      ${entry.item} x ${entry.quantity}
      <span onclick="deleteItem(${index})">❌</span><br>
    `;
  });
}

// delete button logic
function deleteItem(index) {
  shoppingList.splice(index, 1);
  displayListItems();
}

// shopping basket setup
const basketForm = document.getElementById("basket-form");
const basketInputEl = document.getElementById("basket-input");
const missingItemsDisplayEl = document.getElementById("missing-items-display");

// handle basket submit
basketForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // convert basket input to clean array
  const basket = basketInputEl.value
    .split(",")
    .map((item) => item.trim().toLowerCase());

  // extract shopping list item names
  const shoppingItems = shoppingList.map((entry) => entry.item.toLowerCase());

  // find which are missing
  const missingItems = shoppingItems.filter((item) => !basket.includes(item));

  // show result
  if (missingItems.length === 0) {
    missingItemsDisplayEl.innerHTML = "all items are in your basket!";
  } else {
    missingItemsDisplayEl.innerHTML = `
      items still to get:<br>
      ${missingItems.join(", ")}
    `;
  }
});
