/* Pseudo Code 

computerPlay() {
    list = rock paper scissors
    return random item from list
}

playRound(userSelection, computerSelection) {
    if userSelection == computerSelection
        Its a tie
    if user = rock and computer = scissors
    or user = scissors and computer = paper
    or user = paper and computer = rock
        user wins, userSelection beats computerSelection
    else 
        comuter wins
}

game() {
    5 times
        playRound
    if userCount > computerCount
        user wins
    else
        computer wins
}
*/

// plays one round of rock paper scissors based on user and computer input
// determines the winner of the round
// returns void
// increments the counts of wins of user and computer
// just prints the winner of the round and reruns if its a tie
function playRound(userSelection, computerSelection) {
    userSelection = userSelection.toLowerCase();
    // if its a tie
    if (userSelection == computerSelection) {
        console.log("It's a tie");
    }
    // if the user wins 
    else if (userSelection == 'rock' && computerSelection == 'scissors' ||
        userSelection == 'paper' && computerSelection == 'rock' ||
        userSelection == 'scissors' && computerSelection == 'paper')
    {
        userCount++;
        console.log(`You Win! ${userSelection} beats ${computerSelection}, You: ${userCount} : ${computerCount} Computer`);
    }
    // if computer wins
    else {
        computerCount++;
        console.log(`You Lose! ${computerSelection} beats ${userSelection}. You: ${userCount} : ${computerCount} Computer`);
    }
}

// generates computers decision randomly 
// return string (for example -> 'rock')
function computerPlay() {
    list = ['rock', 'paper', 'scissors'];
    return list[Math.floor((Math.random() * 3))];
}

// main game calls playRound function till user or computer hits 3 points
// returns void 
// just gets the user input every round and prints the winner
function game() {
    // plays till 3 points
    while (userCount < 3 && computerCount < 3) {
        userSelection = prompt('rock, paper or scissors?').toLowerCase();
        playRound(userSelection, computerSelection);
    }
    // if the user won
    if (userCount > computerCount) {
        console.log(`You Won. You: ${userCount} : ${computerCount} Computer`);
    } 
    // if the computer won
    else {
        console.log(`You Lost. You: ${userCount} : ${computerCount} Computer`);
    }
}

let userCount = 0;
let computerCount = 0;

let computerSelection = computerPlay();
let userSelection;

game();