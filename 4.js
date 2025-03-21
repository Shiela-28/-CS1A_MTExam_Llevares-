//4. Favorite Number Calculation:

let favNumber = Math.floor(Math.random() * 100) + 1;
let guess;

while (true) {
    guess = (prompt("Guess my favorite number (1-100):"));

    if (guess < favNumber) {
        console.log("Too low, try again.");
    } else if (guess > favNumber) {
        console.log("Too high, try again.");
    } else {
        console.log("Correct! My favorite number is " + favNumber);
        break;
    }
}