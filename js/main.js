/*----- constants -----*/
//cards for game play
//array of random ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🌈", "🖤", "🙄", "🙈", "🫠", "🍑", "🐽", "😍", "🔥", "🐽", "😍", "🔥", "🍑", "🫠", "🙈"];
const maxGuesses = 5;

/*----- state variables -----*/
let gameTable = [];
// when array has 2 cards === full -> compare
let cardsMatch = [];
let pairsMatched;
let clickCount;
//every 2 clicks needs to add up to "1 move" and "minus 1 guess"
let guessesLeft;

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button")
const countEl = document.querySelector(".number-of-moves")
const messageEl = document.querySelector(".message-updates")
const cardEls = document.querySelectorAll(".card")
const pairsMatchedCountEl = document.querySelector(".number-of-pairs")
const guessesLeftEl = document.querySelector(".guesses-left")

/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
//click on each card
for (let i = 0; i < cardEls.length; i++) {
    const currentCardEl = cardEls[i]
    currentCardEl.addEventListener("click", handleCardClick)
}

// need to be able to click the play again button to reset game
//array of card elements to loop over to add event listener
playAgainEl.addEventListener("click", init)

/*----- functions -----*/
//initialize game
init();
function init() {
    // 0 === cards not showing || 1 === cards showing
    clickCount = 0;
    pairsMatched = 0;
    gameTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //random assortment of 20 
    cardsMatch = [];
    guessesLeft = maxGuesses;
    pairsMatchedCountEl.innerHTML = pairsMatched;
    guessesLeftEl.innerHTML = maxGuesses;
    messageEl.innerText = "🧠 Test your Brain Space! 🧠"

    render();
}

function render() {
    renderMessages();
    renderGameTable();
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
            // currentTableIdx.disabled = true;
        } else {
            currentCardElIdx.innerHTML = ""
        }
    }

}



function renderMessages() {
    // if (clickCount++) {
    //     messageEl.innerHTML = "You Clicked A Card!"
    // }

    //message for match made
    // if two cards don't match messageEl.textContent === "No Match! Try Again!"
    //message for no match
    // if guessCount > maxGuesses messageEl.textContent === "Out of guesses! Play Again!"
    //message for loss (over max guess count)
    // if all cards match (no cards on table) messageEl.textContent === "Great job matching!"
    //message for win (all matches made)

}
// do messages and checkMatch do the same thing??

function checkMatch() {


    //allow for two clicks on separate cards and then check for match
    // if match made - make cards color of background to "disapear"
    //if statement to compare two cards
    // if match made message match made
    // if no match message try again
    // if all cards match message great job
    // if guess count > max guess message you lose
}

function checkWinner() {

    //Check the pairsMatched variable

    //as cards match - do all cards match? all cards match < maxGuesses === winner
}

function gameOver() {
    // if guessCount > maxGuesses == you lose, game over
    // if all cards match == you win, game over, play again
}
function checkGuess() {
    if (clickCount === 2) {
        if (cardsMatch[0] === cardsMatch[1]) {
            // if two cards match 
            pairsMatched++;
            messageEl.innerText = "Great Match! Keep Going!";
            // if (guessesLeft > 0) {
            //     guessesLeft--;
            // }
            handleGuess();

            if (pairsMatched === cards.length / 2) {
                messageEl.innerHTML = "YOU WIN! 🏆"
            } else if (guessesLeft === 0) {
                messageEl.innerText = "😝 YOU LOSE! START OVER! 😝"
            }
        } else {
            messageEl.innerText = "No Matches! 👻 Guess Again!"
            if (guessesLeft > 0) {
                guessesLeft--;
                // if guesses left is 0 then set message to you lose
            }
            if (guessesLeft === 0) {
                messageEl.innerText = "😝 You're out of guesses! START OVER! 😝"
            }
            //if guesses left is 0 
            handleGuess();
        }
    }
}
function handleGuess() {
    pairsMatchedCountEl.innerText = pairsMatched;
    guessesLeftEl.innerText = guessesLeft;
    cardsMatch = [];
    clickCount = 0;
}

// trying to figure out what happens when I click on my cards
//how to only allow for two clicks and each click on separate cards
function handleCardClick(evt) {
    if (pairsMatched !== cards.length / 2 && guessesLeft !== 0) {
        if (gameTable[evt.target.id] === 0) {
            //flipped card
            gameTable[evt.target.id] = 1;
            clickCount++;
            cardsMatch.push(cards[evt.target.id])
            checkGuess();

        } else {
            gameTable[evt.target.id] = 0;
            cardsMatch = [];
            clickCount = 0;
        }
        // disable click on that same card ???

    }
    render();
}
