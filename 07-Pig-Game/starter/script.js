// 'use strict';

// // Player Sections
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// // Buttons
// const diceRoll = document.querySelector('.btn--roll');
// const hold = document.querySelector('.btn--hold');
// const newGame = document.querySelector('.btn--new');

// // Players score element
// const scoreEl0 = document.querySelector('#score--0');
// const scoreEl1 = document.querySelector('#score--1');
// const currentScoreEl0 = document.querySelector('#current--0');
// const currentScoreEl1 = document.querySelector('#current--1');

// // Dice
// const diceEl = document.querySelector('.dice');

// // Scores
// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   // Default values

//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   scoreEl0.textContent = 0;
//   scoreEl1.textContent = 0;
//   diceEl.classList.add('hidden');

//   currentScoreEl0.textContent = currentScore;
//   currentScoreEl1.textContent = currentScore;
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
// };

// init();

// // Change Player Function
// const changePlayer = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Clicking Roll
// diceRoll.addEventListener('click', function () {
//   // 1 - Generating random dice number between 1-6
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2 - Show that number on the dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3 - Adds score to current player if the dice roll doesnt equal 1
//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       changePlayer();
//     }
//   }
// });

// // Clicking Hold
// hold.addEventListener('click', function () {
//   if ((playing = true)) {
//     // Player Wins
//     if (scores[activePlayer] >= 30) {
//       // 1 - Add class to winning Player
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');

//       // 2 - Diactivate being able to play
//       playing = false;
//     }

//     // Player Looses
//     else {
//       // Add the current score to the active player
//       scores[activePlayer] += currentScore;
//       document.getElementById(`score--${activePlayer}`).textContent =
//         scores[activePlayer];

//       // 3 - Change the Player after holding
//       changePlayer();
//     }
//   }
// });

// // Restart Game
// newGame.addEventListener('click', init);

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
