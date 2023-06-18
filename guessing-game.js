function guessingGame() {
  const randomNum = Math.floor(Math.random() * 100);
  let over = false;
  let guessCount = 0;
  function handleGuess(guess) {
    if (over) return "The game is over, you already won!";
    guessCount++;
    if (guess < randomNum) return `${guess} is too low!`;
    else if (guess > randomNum) return `${guess} is too high!`;
    else {
      over = true;
      if (guessCount > 1) return `You win! You found ${guess} in ${guessCount} guesses.`;
      else return `You win! You found ${guess} in 1 guess.`;
    }
  }
  return handleGuess;
}

module.exports = { guessingGame };
