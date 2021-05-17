// Returns a string from 'rock', 'paper', or 'scissors' randomly.
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];  // return random integer from 0 to 2; chooses random option
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);    // allows taking input of any capitalization

    const loseString = (win, lose) => "You lose. " + win + " beats " + lose + ".";
    const winString = (win, lose) => "You win. " + win + " beats " + lose + ".";
    const tieString = "It's a tie.";

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return loseString(computerSelection, playerSelection);
        } else if (computerSelection === "Scissors") {
            return winString(playerSelection, computerSelection);
        } else {
            return tieString;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return loseString(computerSelection, playerSelection);
        } else if (computerSelection === "Rock") {
            return winString(playerSelection, computerSelection);
        } else {
            return tieString;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return loseString(computerSelection, playerSelection);
        } else if (computerSelection === "Paper") {
            return winString(playerSelection, computerSelection);
        } else {
            return tieString;
        }
    }
}

function game() {
    const games = 5;

    for (let i=0; i<games; i++) {
        const playerSelection = window.prompt("Choose your weapon.", "rock");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

game();