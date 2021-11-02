function computerPlay(){
    let comp = Math.floor(Math.random() * 3);
    const choice = ['rock','paper', 'scissor'];
    return choice[comp];
}

// Creates Divs for player and comp. scores and places them in container
let playerScore = 0;
let compScore = 0;

const container = document.querySelector('.container');
const playerDiv = document.createElement('div');
playerDiv.setAttribute('id', 'playerScore');
container.appendChild(playerDiv);

const compDiv = document.createElement('div');
compDiv.setAttribute('id','compScore');
container.appendChild(compDiv)

// Inserts the Scores before the btn on DOM
let referenceNode = document.querySelector('.playerSelect');
container.insertBefore(playerDiv, referenceNode);
container.insertBefore(compDiv, referenceNode);


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
    playerDiv.textContent = `Player: ${playerScore}`;
    compDiv.textContent = `Computer: ${compScore}`;
}


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
    playerDiv.textContent = `Player: ${playerScore}`;
    compDiv.textContent = `Computer: ${compScore}`;
});


