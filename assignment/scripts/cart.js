console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Define an empty array as basket
let basket = [];

//Create a function to add an item to basket
function addItem(item) {
  basket.push(item);
  return true;
}

//testing addItem
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem("apples") );
console.log(`basket is now: ${basket}`);
console.log('Adding oranges (expect true)', addItem("oranges") );
console.log(`basket is now: ${basket}`);

// Create a function to list out items from an array with each on a new line.
function listItems(array) {
  for (let i = 0; i < basket.length; i++) {
    console.log(`Item ${i+1}: ${basket[i]}`);
  }
}

// Testing listItems
if (basket.length === 0) {
  console.log(`Basket has no items`);
} else if (basket.length === 1) {
  console.log(`Basket has 1 item.`);
  listItems(basket);
} else {
  console.log(`Basket has ${basket.length} items.`);
  listItems(basket);
}

// Create a function to set the basket array back to empty.
function empty(array) {
  return basket = [];
}

// Testing the empty function
console.log(`Basket is ${basket}`);
console.log('Emptying basket.', empty(basket));
console.log(`Basket is ${(basket.length === 0 ? "empty" : "not empty")}`);
