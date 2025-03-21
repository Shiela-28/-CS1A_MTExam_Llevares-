//3: User Age Categorization:

let age = prompt("Enter your age:"));
let ageCategory;

if (age <= 5) {
  ageCategory = "Toddler";
} else if (age <= 12) {
  ageCategory = "Child";
} else if (age <= 25) {
  ageCategory = "Young Adult";
} else if (age <= 60) {
  ageCategory = "Middle-aged";
} else {
  ageCategory = "Senior";
}

console.log("Your age category is:", ageCategory);