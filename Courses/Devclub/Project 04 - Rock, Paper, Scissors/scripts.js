const result = document.getElementById("result")
const yourScore = document.getElementById("player-points")
const machineScore = document.getElementById("mch-points")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        result.innerHTML = "Jogador Ganhou!"
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Maquina Ganhou!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}