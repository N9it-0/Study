const result = document.getElementById("result")
const yourScore = document.getElementById("player-points")
const machineScore = document.getElementById("mch-points")

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
let humanScoreNumber = 0 --> Camel case
GAME_OPTIONS --> Snake case
*/

//ENUM's
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
        result.innerHTML = "Jogador Ganhou!"
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Maquina Ganhou!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}