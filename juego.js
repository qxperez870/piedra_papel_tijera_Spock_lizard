let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const pepeScore = document.querySelector('[data-pepe-score]')
const otherScore = document.querySelector('[data-other-score]')
const msj_win = document.querySelector('[data-msj-win]')

const SELECTIONS = [
    {
        name: 'rock',
        num: 0,
        emoji: '✊',
        letter: 'r'
    },
    {
        name: 'spock',
        num: 1,
        emoji: '🖖',
        letter: 'k'
    },
    {
        name: 'paper',
        num: 2,
        emoji: '✋',
        letter: 'p'
    },
    {
        name: 'lizard',
        num: 3,
        emoji: '🦎',
        letter: 'l'
    },
    {
        name: 'scissors',
        num: 4,
        emoji: '✌️',
        letter: 's'
    },
]


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 5)
    return randomNumber;
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function drawn(userChoise){
    numberComputer = getComputerChoice()
    otherScore.innerHTML = SELECTIONS[userChoise].emoji
    
    
    
    pepeScore.innerHTML = SELECTIONS[numberComputer].emoji
    
    var numberUser = userChoise;
    
    var difference = numberUser - numberComputer;
    var modulo = ((difference%5) + 5) %5;

    if (modulo ==0){
        msj_win.innerText = "Empate"
    }else if (modulo == 1 || modulo == 2){
        incrementScore(yourScoreSpan);
        otherScore.classList.add('result-selection')
        otherScore.classList.add('winner')
        msj_win.innerText = "Punto para tí"
        
    } else{
        incrementScore(computerScoreSpan);
        console.log("Gana el computador")
        pepeScore.classList.add('result-selection')
        pepeScore.classList.add('winner')
        msj_win.innerText = "Punto para el computador"
        
    } 

}

function main(){

    rock_div.addEventListener('click', function(){
        drawn("0");
    })

    spock_div.addEventListener('click', function(){
        drawn("1");
    })

    paper_div.addEventListener('click', function(){
        drawn("2");
    })

    lizard_div.addEventListener('click', function(){
        drawn("3");
    })

    scissors_div.addEventListener('click', function(){
        drawn("4");
    })
}

main()