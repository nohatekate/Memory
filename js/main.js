/*----- constants -----*/
//cards for game play
//array of random ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🌈", "🖤", "🙄"];
const maxGuesses = 8;

/*----- state variables -----*/
let cardsMatch = [];
let clickCount;
// when array has 2 cards - full - compare
let gameTable = [];
let guessCount;
//every 2 clicks needs to add up to "1 move" and "minus 1 guess"
let guessesLeft;
let winner;

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button")
const countEl = document.querySelector(".number-of-moves")
const messageEl = document.querySelector(".message-updates")
const cardEls = document.querySelectorAll(".card")

/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
//click on each card
for (let i = 0; i < cardEls.length; i++) {
    const currentCardEl = cardEls[i]
    currentCardEl.addEventListener("click", handleCardClick)
    console.log(currentCardEl)
}

// need to be able to click the play again button to reset game
//array of card elements to loop over to add event listener
playAgainEl.addEventListener("click", init)

/*----- functions -----*/
//initialize game
init();
function init() {
    // 0 === cards not showing || 1 === cards showing
    clicks = 0;
    gameTable = [0, 0, 0, 0, 0, 0, 0, 0] //random assortment of 8 
    guessesLeft = maxGuesses;
    guessCount = 0;
    winner = null;
    render();
    console.log("Game is re-set!!!")
}

function render() {
    renderGameTable();
    renderGuessCount();
    renderMessages();
    renderCheckMatch();
}

function renderGameTable() {
    // // needs to track where cards are
    //to set state (new game)
    //loop through the game table - if 0(meaning no card value) -> set card
    for (let i = 0; i < gameTable.length; i++) {
        const currentTableIdx = gameTable[i]
        const currentEmoji = cards[i]
        const currentCardElIdx = cardEls[i]
        //when 0 - set current index to the value of card[i]
        if (currentTableIdx === 1) {
            currentCardElIdx.innerHTML = currentEmoji;
        } else {
            currentCardElIdx.innerHTML = ""
        }
    }

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
    //allwo for two clicks and then check 
    //if statement to compare two cards
    // if match made message match made
    // if no match message try again
    // if all cards match message great job
    // if guess count > max guess message you lose
}

function checkWinner() {
    //as cards match - do all cards match? all cards match < maxGuesses === winner
}

function gameOver() {
    // if guessCount > maxGuesses == you lose, game over
    // if all cards match == you win, game over, play again
}

// trying to figure out what happens when I click on my cards
function handleCardClick(evt) {
    gameTable[evt.target.id] = 1;
    render();
}