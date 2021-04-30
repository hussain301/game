'use strict';

let randomNumber = Math.trunc(Math.random()*20)+1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', 


function (){
  const valu = Number(document.querySelector('.guess').value);
  if(!valu)document.querySelector('.message').textContent = '⛔ No number!.';
else if(valu===randomNumber){
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.message').textContent = '🎉 Correct Number!'
      document.querySelector('body').style.backgroundColor = "#60b347";
      document.querySelector('.number').style.width = "30rem";

      if(highscore<score)
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
      else if(randomNumber<document.querySelector('.guess').value)
    {  
      document.querySelector('.message').textContent = '📉 Too high!'
       score--;         
       document.querySelector('.score').textContent = score; 
}
    else if(score=='1')
    {  
      document.querySelector('.message').textContent = '🔥 You lost the game!';
      document.querySelector('.score').textContent = 0; 
}
      else{
      document.querySelector('.message').textContent = '📉 Too low!'
      score--;         
      document.querySelector('.score').textContent = score;  
    }  
    });
    ///Again button Implementation
document.querySelector('.again').addEventListener('click', 
function(){
   randomNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start guessing...'; 
  document.querySelector('body').style.backgroundColor='#222'
  document.querySelector('.number').style.width='15rem'
  score = Number(document.querySelector('.score').textContent = '20');  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value= '';


});








