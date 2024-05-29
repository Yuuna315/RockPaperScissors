
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultText = document.getElementById('result-text');
const humanScoreText = document.getElementById('human-score');
const computerScoreText = document.getElementById('computer-score');
const gameOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

const getComputerChoice = () => {
    return gameOptions[Math.floor(Math.random() * 3)];
}


const getHumanChoice = () => {
    let userInput = prompt("Rock, Paper or Scissors?????").toLowerCase();
    if (gameOptions.includes(userInput)) {
        return userInput;
    } else {
        console.log("Incorrect entry");
        return getComputerChoice(); 
    }
}


const playRound = (humanChoice, computerChoice) => {

    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        humanScoreText.innnerText = humanScore;
        resultText.innerText = 'YOU WIN!';
        } else if (humanChoice === computerChoice) {
        resultText.innnerText = 'It is tie.';
    } else {
        computerScore++;
        computerScoreText.innerText = computerScore;
        resultText.innerText = 'You lose....';
    }

    if (humanScore > 4 || computerScore > 4){
        resultText.innerHTML = humanScore > 4 ? 'You win the game!!!!!' : 'You lose the game....';
        humanScore = 0;
        computerScore = 0;
        humanScoreText.innerText = humanScore;
        computerScoreText.innerText = computerScore;
    }
};
