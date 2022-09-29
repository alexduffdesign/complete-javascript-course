'use strict';

// Buttons
const diceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Players score
const scoreEl0 = document.querySelector('#score--0');
const currentScoreEl0 = document.querySelector('current--0');

const scoreEl1 = document.querySelector('#score--1');
const currentScoreEl1 = document.querySelector('current--1');

// Dice
const diceEl = document.querySelector('.dice');

// Default values
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

// scores
let scoreP1 = 0;
let scoreP2 = 0;

let currentScoreP1 = 0;
let currentScoreP2 = 0;

// Clicking Roll
diceRoll.addEventListener('click', function () {
  // 1 - Generating random dice number between 1-6
  let dice = Math.trunc(Math.random() * 6) + 1;

  // 2 - Show that number on the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3 - Adds score to current player if the dice roll equals 1
  if (dice !== 1) {
    currentScoreP1 += dice;
    currentScoreEl0.textContent = currentScoreP1; // Change later
  } else {
  }
});
