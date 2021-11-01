function computerPlay(){
    let comp = Math.floor(Math.random() * 3);
    if (comp == 0){
        return "rock";
    } else if (comp == 1){
        return "paper";
    }else{
        return "scissor";
    }
}

function playRound(player, computer){
    let playerScore = 0;
    let compScore = 0;
    
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

const scoreDiv = document.querySelector('.score');

ttes






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
