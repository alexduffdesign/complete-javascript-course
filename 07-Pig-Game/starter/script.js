'use strict';

// Player Sections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Buttons
const diceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Players score element
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentScoreEl0 = document.querySelector('#current--0');
const currentScoreEl1 = document.querySelector('#current--1');

// Dice
const diceEl = document.querySelector('.dice');

// Default values

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

// Scores
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Change Player Function
const changePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Clicking Roll
diceRoll.addEventListener('click', function () {
  // 1 - Generating random dice number between 1-6
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2 - Show that number on the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3 - Adds score to current player if the dice roll equals 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

// Clicking Hold
hold.addEventListener('click', function () {
  // Add the current score to the active player
  if ((playing = true)) {
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      changePlayer();
    }
  }
});

// Restart Game
newGame.addEventListener('click', function () {
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceEl.classList.add('hidden');
  scores[(0, 0)];
  activePlayer = 0;
  playing = true;
  currentScore = 0;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--0`).textContent = currentScore;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
});
