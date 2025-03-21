//6. The Grocery List:

let groceryList = [];
let itemCount = (prompt("How many items do you want to add to the grocery list?"));

for (let i = 0; i < itemCount; i++) {
    let item = prompt("Enter grocery item:");
    groceryList.push(item);
}

let groceryList_Sort = [...groceryList].sort();
let groceryList_Reverse = [...groceryList].reverse();

console.log("Original list: " + groceryList.join(", "));
console.log("Sorted list: " + groceryList_Sort.join(", "));
console.log("Reversed list: " + groceryList_Reverse.join(", "));