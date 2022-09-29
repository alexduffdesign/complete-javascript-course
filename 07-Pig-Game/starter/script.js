'use strict';

// Buttons
const diceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Players score
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');

// Dice
const dice = document.querySelector('.dice');

// Default values
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
dice.classList.add('hidden');
