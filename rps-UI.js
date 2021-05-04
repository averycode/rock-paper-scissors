// plays one round of rock paper scissors based on user and computer input
// determines the winner of the round
function playRound(userSelection) {
    let computerSelection = computerPlay();
    userSelection = userSelection.target.innerText;
    userSelection = userSelection.toLowerCase();
    // if its a tie
    if (userSelection == computerSelection) {
        result.innerText = "It's a Tie"
    }
    // if the user wins 
    else if (userSelection == 'rock' && computerSelection == 'scissors' ||
        userSelection == 'paper' && computerSelection == 'rock' ||
        userSelection == 'scissors' && computerSelection == 'paper')
    {
        userCount++;
        result.innerText = `You Win! ${userSelection} beats ${computerSelection}`;
    }
    // if computer wins
    else {
        computerCount++;
        result.innerText = `You Lose! ${computerSelection} beats ${userSelection}`;
    }
    intermediate.innerText = `You: ${userCount} : ${computerCount} Computer`;
    checkWinner();
}

// generates computers decision randomly 
function computerPlay() {
    list = ['rock', 'paper', 'scissors'];
    return list[Math.floor((Math.random() * 3))];
}


// plays till 5 points, gets the winner and disables buttons after
function checkWinner() {
    if (!(userCount < 5 && computerCount < 5)) {
        if (userCount > computerCount) {
            winner.innerText = (`You Won. You: ${userCount} : ${computerCount} Computer`);
            buttons.forEach(btn => btn.disabled = true);
        } 
        else {
            winner.innerText = (`You Lost. You: ${userCount} : ${computerCount} Computer`);
            buttons.forEach(btn => btn.disabled = true);
        }
    }
}


const buttons = Array.from(document.querySelectorAll('.play'));
buttons.forEach(btn => btn.addEventListener('click', playRound));

const result = document.querySelector('.result-round');
const intermediate = document.querySelector('.intermediate');

const winner = document.querySelector('.winner');

let userCount = 0;
let computerCount = 0;

let userSelection;