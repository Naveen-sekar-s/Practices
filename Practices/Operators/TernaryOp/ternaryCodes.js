let player = "scissors"
let computer = "paper"
let result = player === computer ? "Tie" :
             player === "rock" && computer === "paper" ? "computer wins" :
             player === "paper" && computer === "scissor" ? "computer wins" :
             player === "scissors" && computer === "rock"  ? "computer wins" : "player wins"
console.log(result)