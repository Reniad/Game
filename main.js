const choices = ["rock","paper","scissors"];
const winners=[];


function game(){
    alert('In this Game you will be playing 5 rounds at once !Please Try to type Correctly ! Good luck! ');
    alert('Ready ? ....Go !!!');
  for(let i = 0; i<5 ; i++){
    playRound(i);
  }
  Winners();
}

function playRound(round){
 const playerSelection = playerChoice();
 const computerSelection = computerChoice();
 const winner = checkWinner(playerSelection,computerSelection);
 Round(playerSelection,computerSelection,winner,round);
}

function playerChoice (){
  let input =prompt('type Rock , Paper or Scissors');
  while(input == null){
    input = prompt('Type Rock , Paper or Scissors');
  }
  input =input.toLowerCase();
  let check = validateInput(input)
  while (check == false ){
    input =prompt('Oops Try again');
    input=input.toLowerCase();
    check = validateInput(input); 
  }
return input; 
}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
  if (choices.includes(choice)){
    return true; 
  } else {
    return false;
  }
}

function checkWinner(ChoicePlayer,ChoiceComputer){
  if(ChoicePlayer === ChoiceComputer){
    return 'Equality';
  } else if ((ChoicePlayer ==='rock' && ChoiceComputer=='scissors') || (ChoicePlayer ==='paper' && ChoiceComputer=='rock') || (ChoicePlayer ==='scissors' && ChoiceComputer=='paper')){
    return 'Player ';
  } else {
    return 'Computer '
  }
}

function Winners(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let equality = winners.filter((item) => item == "equality").length;
  console.log('Results :');
  console.log('Player :',playerWins);
  console.log('Computer :',computerWins);
  console.log('Equality:',equality);
}

function Round(playerChoice,computerChoice,winner,round){
  console.log('Round:',round);
  console.log('Player choice:',playerChoice);
  console.log('Computer choice:',computerChoice);
  console.log(winner,'won the round');
  console.log("---------------------");
}

game();