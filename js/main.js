/*----- constants -----*/
//cards for game play
//array of random ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🙄", "🖤", "🌈"];

const maxGuesses = 12;

/*----- state variables -----*/
let guessCount;
let gameTable;
let winner;
let cardsMatch;

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button")
// console.log(playAgainEl);
const countEl = document.querySelector(".number-of-moves")
// console.log(countEl);
const messageEl = document.querySelector(".message-updates")
// console.log(messageEl)
//array of card elements to loop over and add emoji to using event listener
const cardEls = document.querySelectorAll(".card")
// console.log(cardEls);


/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again

// need to be able to click the play again button to reset game
playAgainEl.addEventListener("click", init)


/*----- functions -----*/
//initialize game
init()
function init() {
    gameTable = [0, 0, 0, 0, 0, 0, 0, 0] //random assortment of 8 
    // 0 === not flipped (no emoji)
    //1 === "flipped" (emoji showing)
    winner = null;
    guessCount = 0;
    render();
    // alert("Game is re-set!!!")
}

function render() {
    renderGameTable();
    renderGuessCount();
    renderMessages();
    renderCheckMatch();
    // console.log("testing render")
}

function renderGameTable() {
    // console.log("testing render game table")
    // needs to start game with 8 cards face down
    // needs to track where cards are
}

function renderGuessCount() {
    //start game with zero guess count
    // add one guess count for every 2 cards clicked
    // console.log("testing guess count")
}

function renderMessages() {
    // console.log("testing render Message")
    //message for match made
    //message for no match
    //message for loss (over max guess count)
    //message for win (all matches made)
}
// do messages and checkMatch do the same thing??

function renderCheckMatch() {
    // console.log("testing render check match")
    //if statement to compare two cards
    // if match made message match made
    // if no match message try again
    // if all cards match message great job
    // if guess count > max guess message you lose
}
