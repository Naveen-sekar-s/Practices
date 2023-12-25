let result = (player) => {
    computer = 'rock'
    player = computer === player ? 'Tie' :
             computer === 'rock' && player === 'scissor' ? 'computer wins' :
             computer === 'paper' && player === 'rock' ? 'computer wins' :
             computer === 'scissor' && player === 'paper' ? 'computer wins' : 'player wins'
             return player
}
console.log(result('scissor'))