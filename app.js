
// Dom Selectors
let buttonSelectors = document.querySelectorAll('.btn');
let computerSelectors = document.querySelector('.computer-picked');
let userSelectors = document.querySelector('.user-picked');
let matchSelectors = document.querySelector('.match-result');
let userDefaultScore = 0;
let computerDefaultScore = 0;
let userScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.comp-score');
//user choice
for (const button of buttonSelectors) {
   button.addEventListener('click', function (elem) {
      //get the user choice 
      let getUserChoice = button.value;
      console.log(getUserChoice);
      //get the computer choice
      let getComputerChoice = computerChoice();


      // display the user choice
      if (getUserChoice == 'Rock') {
         userSelectors.innerHTML = '<i class="fas fa-hand-rock"></i>';
      } else if (getUserChoice == 'Paper') {
         userSelectors.innerHTML = '<i class="fas fa-hand-paper"></i>';
      } else if (getUserChoice == 'Scissors') {
         userSelectors.innerHTML = '<i class="fas fa-hand-scissors"></i>';
      }
      
      //display the computer choice
      if (getComputerChoice == 'Rock') {
         computerSelectors.innerHTML = '<i class="fas fa-hand-rock"></i>';
      } else if (getComputerChoice == 'Paper') {
         computerSelectors.innerHTML = '<i class="fas fa-hand-paper"></i>';
      } else if (getComputerChoice == 'Scissors') {
         computerSelectors.innerHTML = '<i class="fas fa-hand-scissors"></i>';
      }
      //compare the userchoice and computerChoice
      compareChoice(getUserChoice, getComputerChoice);
   })
}

var computerChoice = () => {
   //random a number
   let computerRandom = Math.floor(Math.random() * 3);
   //declare an array for the rock paper scissors 
   let arrayChoices = ['Rock', 'Paper', 'Scissors'];
   //computerRandom variable will be choice of computer for rock paper scissor
   return arrayChoices[computerRandom];

}

let compareChoice = (user, computer) => {

   console.log(user + computer);
   switch (user + computer) {
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
         matchSelectors.innerHTML = '<h3>👌 Its a tie! 👌</h3>';
         break;
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
         matchSelectors.innerHTML = '<h3>👏 You win! 👏</h3>';
         scoreBoardUser();
         break;
      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
         matchSelectors.innerHTML = '<h3>👎 You Lose! 👎</h3>';
         scoreBoardComputer();
         break;
   }
}

let scoreBoardUser = () => {
   userDefaultScore++;
   userScore.textContent = userDefaultScore;
}

let scoreBoardComputer = () => {
   computerDefaultScore++;
   computerScore.textContent = computerDefaultScore;
}



