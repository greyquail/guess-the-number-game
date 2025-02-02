let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let attempts = 0;
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");
let restartButton = document.getElementById("restart");
let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        restartButton.style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        message.textContent = `Too low! Try again.`;
        message.style.color = 'orange';
    } else {
        message.textContent = `Too high! Try again.`;
        message.style.color = 'orange';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new random number
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    message.textContent = '';
    restartButton.style.display = 'none';
    guessInput.value = '';
}

// Event listeners for submitting the guess and restarting the game
submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
