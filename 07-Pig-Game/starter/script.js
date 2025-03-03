'use strict';

// Player Sections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentScoreEl0 = document.querySelector('#current--0');
const currentScoreEl1 = document.querySelector('#current--1');

// Dice
const diceEl = document.querySelector('.dice');

// Scores
let scores, currentScore, activePlayer, playing;

const init = function () {
  // Default values

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;

  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

// Change Player Function
const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Clicking Roll
diceRoll.addEventListener('click', function () {
  // 1 - Generating random dice number between 1-6
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 - Show that number on the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3 - Adds score to current player if the dice roll doesnt equal 1
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
  if ((playing = true)) {
    // Add the current score to the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Player Wins

    if (scores[activePlayer] >= 30) {
      // 1 - Add class to winning Player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // 2 - Diactivate being able to play
      playing = false;
    }

    // Player Looses
    else {
      // 3 - Change the Player after holding
      changePlayer();
    }
  }
});

// Restart Game
newGame.addEventListener('click', init);
