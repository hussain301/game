'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const valu = Number(document.querySelector('.guess').value);
  if (!valu) displayMessage('⛔ No number!.');
  else if (valu === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
//   } else if (valu !== randomNumber) {
    if (score >= 1) {
      displayMessage(valu > randomNumber ? '📉 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🔥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
///Again button Implementation
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = document.querySelector('.score').textContent = 20;
  
  document.querySelector('.guess').value = '';
});









