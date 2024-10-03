// numberGuess.js

// Import readline module to take user input
const readline =('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Set the correct number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Function to ask for a guess
function askGuess() {
    readline.question('Guess a number between 1 and 10: ', (guess) => {
        guess = parseInt(guess);

        if (guess > correctNumber) {
            console.log('Too high!');
            askGuess(); // Recursively ask again
        } else if (guess < correctNumber) {
            console.log('Too low!');
            askGuess(); // Recursively ask again
        } else {
            console.log('Correct!');
            readline.close(); // Close the interface once correct
        }
    });
}
// Start the game by asking for the first guess
askGuess();
