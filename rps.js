// Returns a string from 'rock', 'paper', or 'scissors' randomly.
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];  // return random integer from 0 to 2; chooses random option
}

function resultLogic(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Paper": return "lose";
                case "Scissors": return "win";
                default: return "tie";
            }
        case "Paper":
            switch (computerSelection) {
                case "Scissors": return "lose";
                case "Rock": return "win";
                default: return "tie";
            }
        case "Scissors":
            switch (computerSelection) {
                case "Rock": return "lose";
                case "Paper": return "win";
                default: return "tie";
            }
    }
}

function playRound(playerInput) {
    let computerInput = computerPlay();
    let result = resultLogic(playerInput, computerInput);

    switch (result) {
        case "win":
            resultWindow.setAttribute("style", "background-color: turquoise");
            resultWindow.textContent = `You win. ${ playerInput } beats ${ computerInput }.`;
            playerWins++;
            break;
        case "lose":
            resultWindow.setAttribute("style", "background-color: orange");
            resultWindow.textContent = `You lose. ${ computerInput } beats ${ playerInput }.`;
            computerWins++;
            break;
        case "tie":
            resultWindow.setAttribute("style", "background-color: gray");
            resultWindow.textContent = "It's a tie.";
            break;
    }

    updateScores()

    if (playerWins >= 5) {
        resultWindow.setAttribute("style", "background-color: turquoise");
        resultWindow.textContent = "YOU reached 5 points! You win!";
        resetScores();
    } else if (computerWins >= 5) {
        resultWindow.setAttribute("style", "background-color: orange");
        resultWindow.textContent = "COM reached 5 points! You lose!";
        resetScores();
    }
}

function updateScores() {
    scoreWindow.textContent = `Score: YOU - ${playerWins}, COM - ${computerWins}`;
}

function resetScores() {
    playerWins = 0;
    computerWins = 0;
    updateScores();
}

let playerWins = 0;
let computerWins = 0;

const scoreWindow = document.querySelector("#scoreWindow");
const resultWindow = document.querySelector("#resultWindow");

updateScores();

// Defining button behaviour
const rockBtn = document.querySelector("#rockSelect");
const paperBtn = document.querySelector("#paperSelect");
const scissorsBtn = document.querySelector("#scissorsSelect");

rockBtn.addEventListener('click', () => {
    playRound("Rock");
});
paperBtn.addEventListener('click', () => {
    playRound("Paper");
});
scissorsBtn .addEventListener('click', () => {
    playRound("Scissors");
});
