console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Define a constant for the maximum number of items
const maxItems = 5;
//Define an empty array as basket
let basket = [];


//Create a function to add an item to basket
function addItem(item) {
  if (isFull(basket) === true) {
    console.log(`Basket is currently full. Could not add ${item}`);
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

console.log(`
  Testing addItem
  `);
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
console.log(`
  Testing listItems
  `);
console.log("Listing out items in basket:");
listItems(basket);

// if (basket.length === 0) {
//   console.log(`Basket has no items`);
// } else if (basket.length === 1) {
//   console.log(`Basket has 1 item.`);
//   listItems(basket);
// } else {
//   console.log(`Basket has ${basket.length} items.`);
//   listItems(basket);
// }

// Create a function to set the basket array back to empty.
function empty(array) {
  return basket = [];
}

// Testing the empty function
console.log(`
  Testing empty
  `);
console.log(`Basket is ${basket}`);
console.log('Emptying basket.', empty(basket));
console.log(`Basket is ${(basket.length === 0 ? "empty" : "not empty")}`);

// STRETCH GOALS

// Create a function to determine if the basket array can contain anymore values
function isFull(array) {
  if (array.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

//Testing isFull function
console.log(`
  Testing isFull
  `);
let foodList = ["peaches", "plums", "bananas", "strawberries", "apples", "oranges", "apricots"]

console.log(`Adding ${foodList} to basket.`);

for (x of foodList) {
  addItem(x);
}
listItems(basket);
console.log(`Basket is ${basket}`);
console.log(`Basket has ${isFull(basket) ? "no more space" : "more space"}`);
console.log('Emptying basket.', empty(basket));
console.log(`Basket has ${isFull(basket) ? "no more space" : "more space"}`);

// create a function that removes a selected items
function removeItem(item) {
  if (basket.includes(item)) {
    let index = basket.indexOf(item);
    let removedItem = basket.splice(index, 1);
    return removedItem;
  } else {
    return null;
  }
}

console.log(`
  Testing removeItem
  `);
for (x of foodList) {
  addItem(x);
}

console.log(`Basket is ${basket}`);
console.log('Attempting to remove "plums":', removeItem("plums"));
console.log(`basket is now: ${basket}`);
console.log('Attempting to remove "pizza":', removeItem("pizza"));
console.log(`basket is now: ${basket}`);
