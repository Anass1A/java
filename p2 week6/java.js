let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').textContent = `Score: You ${userScore} - ${computerScore} Computer`;
}
