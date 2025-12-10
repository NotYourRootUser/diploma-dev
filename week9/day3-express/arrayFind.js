const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
 
  const findElement = inventory.find((element, index, array) => {
    return element.name === "bananas";
  });
console.log(findElement);
