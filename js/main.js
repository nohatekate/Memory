/*----- constants -----*/
//cards for game play
//array of random ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🙄", "🖤", "🌈"];

const maxGuesses = 8;

/*----- state variables -----*/
let guessCount;
let gameTable = [];
let winner;
// when array has 2 cards - full - compare
let cardsMatch = [];

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button")
const countEl = document.querySelector(".number-of-moves")
const messageEl = document.querySelector(".message-updates")
const cardEls = document.querySelectorAll(".card")

/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
//click on each card

// need to be able to click the play again button to reset game
//array of card elements to loop over to add event listener
playAgainEl.addEventListener("click", init)
for (let i = 0; i < cardEls.length; i++) {
    const currentCardEl = cardEls[i]
    currentCardEl.addEventListener("click", handleCardClick)
    console.log(currentCardEl)
}

/*----- functions -----*/
//initialize game
init()
function init() {
    gameTable = [0, 0, 0, 0, 0, 0, 0, 0] //random assortment of 8 
    render();
    // alert("Game is re-set!!!")
}

function render() {
    renderGameTable();
    renderGuessCount();
    renderMessages();
    renderCheckMatch();
}

function renderGameTable() {
    // // needs to track where cards are
}

function renderGuessCount() {
    //start game with zero guess count
    // add one guess count for every 2 cards clicked
}

function renderMessages() {
    //message for match made
    //message for no match
    //message for loss (over max guess count)
    //message for win (all matches made)
}
// do messages and checkMatch do the same thing??

function renderCheckMatch() {
    //if statement to compare two cards
    // if match made message match made
    // if no match message try again
    // if all cards match message great job
    // if guess count > max guess message you lose
}

// trying to figure out what happens when I click on my cards
function handleCardClick(evt) {
    console.log(evt.target)
}