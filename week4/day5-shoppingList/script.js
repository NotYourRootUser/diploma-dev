const shoppingList = [];

// Selecting Elements
const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");

shoppingListForm.addEventListener("submit", (event) => {
  event.preventDefault();
//   console.log(itemInputEl.value);
//   console.log(quantityInputEl.value);
  shoppingList.push({
    item: itemInputEl.value,
    quantity: quantityInputEl.value,
  });
  console.log(shoppingList);
  displayListItems()
});

function displayListItems() {
  shoppingListDisplayEl.innerHTML = ""; // clear old display

  shoppingList.forEach((entry, index) => {
    shoppingListDisplayEl.innerHTML +=
      `${entry.item} x ${entry.quantity} <span onclick="deleteItem(${index});">❌</span><br>`;
  });
}

function deleteItem(index) {
  shoppingList.splice(index, 1); // remove item
  console.log(shoppingList)
  displayListItems(); // refresh display
}


