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
    if (player == computer){
        console.log("It's a tie!");
    } else if (player == "rock" && computer == "paper" || 
               player == "paper" && computer == "scissor" ||
               player == "scissor" && computer == "rock"
    ){
        console.log(player, computer);
        console.log("You Lose");
    } else{
        console.log("You Win!");
    }
}

function game(){
    for (i = 0; i < 5; i++){
        let computer = computerPlay();
        let player = window.prompt("Rock, paper, or scissor?");
        playRound(player, computer);
    }
}