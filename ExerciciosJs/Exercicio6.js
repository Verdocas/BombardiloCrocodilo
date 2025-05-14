
let input = "rock"

//parseInt(prompt ("rock paper scissors"))

let computerMove = Math.floor (Math.random()*3)+1

function getComputerMove (computerMove) {
    
    switch (computerMove) {
        case 1:
            return "Rock".toLowerCase();
        case 2:
            return "Paper".toLowerCase();
        case 3:
            return "Scissors".toLowerCase();
    }
    
}

console.log (getComputerMove (computerMove))

function playRound (computerMove, input) {
    if (input===computerMove) {
        return "empate";
    } else if (
        input==="rock" && getComputerMove(computerMove)==="scissors" ||
        input==="paper" && getComputerMove(computerMove)==="rock" ||
        input==="scissors" && getComputerMove(computerMove)==="paper"
    ) {
        return "ganhaste!";
    } else {
        return "perdeste :(";
    }
}

console.log (playRound(input, computerMove))