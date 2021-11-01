function computerPlay(){
    let comp = Math.floor(Math.random() * 3);
    const choice = ['rock','paper', 'scissor'];
    return choice[comp];
}

let playerScore = 0;
let compScore = 0;

function playRound(player, computer){    
    if (player == computer){
        console.log("It's a tie!");
    } else if (player == "rock" && computer == "paper" || 
               player == "paper" && computer == "scissor" ||
               player == "scissor" && computer == "rock"
    ){
        console.log(player, computer);
        console.log("You Lose");
        compScore++;
    } else{
        console.log("You Win!");
        playerScore++;
    }
}

const container = document.querySelector('.container');
const div = document.createElement('div');
div.setAttribute('id', 'score');
div.textContent = `Score: ${playerScore}`;
container.appendChild(div);







// Button events
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const reset = document.querySelector('#reset');

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
scissor.addEventListener('click', () => {
    playRound('scissor', computerPlay());
});
reset.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
});
