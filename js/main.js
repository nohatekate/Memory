/*----- constants -----*/
//cards for game play
//array of random ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🙄", "🖤", "🌈"];

const maxGuesses = 12;

/*----- state variables -----*/
let guessCount = 0;
let gameTable = [];
let winner = false;
let cardsMatch = [];
// when array has 2 cards - full - compare

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button")

const countEl = document.querySelector(".number-of-moves")

const messageEl = document.querySelector(".message-updates")

//array of card elements to loop over and add emoji to using event listener
const cardEls = document.querySelector(".card")
console.log(cardEls)


/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
//click on each card
// cardEls.addEventListener("click", handleCardClick)
cardEls.forEach(handleCardClick)
// need to be able to click the play again button to reset game
playAgainEl.addEventListener("click", init)


/*----- functions -----*/
//initialize game
init()
function init() {
    gameTable = [0, 0, 0, 0, 0, 0, 0, 0] //random assortment of 8 
    // 0 === not flipped (no emoji)
    //1 === "flipped" (emoji showing)
    for (let i = 0; i<gameTable.length; i++){

    // }
    render();
    // alert("Game is re-set!!!")
}
}

function render() {
    console.log("Calling render");
    renderGameTable();
    renderGuessCount();
    renderMessages();
    renderCheckMatch();
}

function renderGameTable() {

    // cardEls.style.visibility = 0 ? "visible" : "hidden";
    // // needs to start game with 8 cards face down
    // const testClick = gameTable[idx].includes(0) ? "hidden" : "visible"
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
function handleCardClick(evt){
    console.log(evt.target)
// evt.target
// console.log(currentCard.id)
// const currentPick = cards.indexOf(evt.target)
}

handleCardClick(cardEls[0]);