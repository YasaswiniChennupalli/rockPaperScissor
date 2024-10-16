let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const body = document.querySelector("body");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "The game was Draw";
    body.classList.add("black");
    body.classList.remove("green");
    body.classList.remove("red");
}

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner =(userWin,userChocie,compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`you win ${userChocie} beats ${compChoice}`);
        msg.innerText = `you win!! Your ${userChocie} beats ${compChoice}`;
        body.classList.remove("black");
        body.classList.remove("red");
        body.classList.add("green");
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log(`you lose ${compChoice} beats ${userChocie}`);
        msg.innerText = `you lose :) ${compChoice} beats your ${userChocie}`;
        body.classList.remove("black");
        body.classList.remove("green");
        body.classList.add("red");
        
    }
}
const playGame = (userChocie) => {
    console.log("User choice is ",userChocie);
    //Generate Computer Choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice is ",compChoice);

    if(userChocie === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChocie === "rock") {
            //computer has 2 choices paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChocie === "paper") {
            //computer has 2 choices rock,scissors
            userWin = compChoice === "rock"? true : false;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChocie,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})