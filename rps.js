// Returns a string from 'rock', 'paper', or 'scissors' randomly.
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];  // return random integer from 0 to 2; chooses random option
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
            break;
        case "lose":
            resultWindow.setAttribute("style", "background-color: orange");
            resultWindow.textContent = `You lose. ${ computerInput } beats ${ playerInput }.`;
            break;
        case "tie":
            resultWindow.setAttribute("style", "background-color: gray");
            resultWindow.textContent = "It's a tie.";
            break;
    }
}

const resultWindow = document.querySelector("#resultsWindow");

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
