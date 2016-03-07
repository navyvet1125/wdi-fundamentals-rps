////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    //check to see whether or not the argument 'move' is defined.
    if(move){
        //if move is valid, check to see if it is a valid entry
        if((move=='rock')||(move=='paper')||(move=='scissors')){
            console.log("Player chose "+move+"!");
            //if so, return argument 'move'.
            return move;
        }else {
            //if 'move' is not a valid response, alert player and try again.
            console.log("Invalid entry!  Try again!");
            return getPlayerMove(getInput());
        }
    //if 'move' is undefined, alert the player and try again.
    }else {
        console.log("Invalid entry!  Try again!");
        return getPlayerMove(getInput());
    }
}

function getComputerMove(move) {
     //check to see whether or not the argument 'move' is defined.
    if(move){
        //if move is valid, check to see if it is a valid entry
        if((move=='rock')||(move=='paper')||(move=='scissors')){
            console.log("Computer chose "+move+"!");
            //if so, return argument 'move'.
            return move;
        }else {
            //if 'move' is not a valid response, alert player and try again.
            return getComputerMove(randomPlay());
        }
    //if 'move' is undefined, alert the player and try again.
    }else {
        return getComputerMove(randomPlay());
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    //check to see if player and computer made different moves.
    //if the moves are the same then they are shunted to the else event.
    if (playerMove!=computerMove){
        
        /*  Evaluate computer move based on whether player chose rock, paper, or scissors.
            The computer will either win or lose, depending on what the player has selected,
            as the potential for same move has already been dealt with.
        */
        switch (playerMove) {
            case 'rock':
                (computerMove =='paper') ? winner='computer': winner ='player';
                break;
            case 'paper':
                (computerMove =='scissors') ? winner='computer': winner ='player';
                break;
            case 'scissors':
                (computerMove =='rock') ? winner='computer': winner ='player';
        }

        //indicate the winner
        (winner=='computer') ? console.log(computerMove+" beats "+ playerMove+"!"): console.log(playerMove+" beats "+ computerMove+"!");
        console.log("The "+winner+" wins this round!");
    } else{
        //if both player and computer moves are the same.
        winner='tie';
        //indicate a tie has occured
        console.log("It's a tie!");
        console.log("Both the Player and the Computer chose "+playerMove+"!");
    }
    //return the winner of the match
    return winner;
}

function playTo(rounds) {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("First one to "+rounds+" wins!!!");
    //Declare variables needed for function to work.
    var playerWins = 0;
    var computerWins = 0;
    var playerChoice='rock'; 
    var computerChoice='paper';
    var roundWinner='computer';
    var roundCounter=0;

    //Play matches.  Loop until either player or Computer wins 5 matches.
    while ((playerWins<rounds)&&(computerWins<rounds)){
        //increment round counter
        roundCounter++;
        console.log("Round #"+roundCounter+"!");
        //get player and computer choices
        playerChoice = getPlayerMove(getInput());
        computerChoice = getComputerMove(randomPlay());
        //check winner
        roundWinner=getWinner(playerChoice,computerChoice);
        //choose winner; assuming that it was not a tie
        if(roundWinner!='tie'){
            //increment the appropriate score
            (roundWinner=='computer') ? computerWins++ : playerWins++;
            //displays current scores of the Player and the Computer
            console.log("The score is:");
            console.log("Player: "+playerWins+"  Computer: "+computerWins);
        }
    }
    return [playerWins, computerWins];
}
var gameWinner =playTo(5);
(gameWinner[0]>gameWinner[1]) ? console.log("The Player wins!!!: "+gameWinner[0]+" to "+gameWinner[1]+"!") : console.log("The Computer wins!!!: "+gameWinner[1]+" to "+gameWinner[0]+"!");