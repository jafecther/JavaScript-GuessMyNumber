'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!👍';
//manipulation of the dom via elements.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input.
  if (!guess) {
    displayMessage('No Number!🤬');
    // document.querySelector('.message').textContent = 'No Number!👍';
    // When user selects the correct number and wins.
  } else if (guess === secretNumber) {
    // Can refactor all message type code with displayMessage object.
    document.querySelector('.message').textContent = 'Correct Number!👍';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When input is too high.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
      // When user loses.
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
      // When user loses.
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
    // When input is too low.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
      // When user loses.
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
