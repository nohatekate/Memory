/*----- constants -----*/
//cards for game play
//array of "random" ordered cards
const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🌈", "🖤", "🙄", "🙈", "🫠", "🍑", "🐽", "😍", "🔥", "🐽", "😍", "🔥", "🍑", "🫠", "🙈"];
const maxGuesses = 20;

/*----- state variables -----*/
//game table to place cards face down
let gameTable = [];
// when array has 2 cards === full -> compare
let cardsMatch = [];
let pairsMatched;
//every 2 clicks needs to add up to "1 move" and "minus 1 guess if no match"
let clickCount;
let guessesLeft;

/*----- cached elements  -----*/
const playAgainEl = document.querySelector("button");
const messageEl = document.querySelector(".message-updates");
const cardEls = document.querySelectorAll(".card");
const pairsMatchedCountEl = document.querySelector(".number-of-pairs");
const guessesLeftEl = document.querySelector(".guesses-left");

/*----- event listeners -----*/
// need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
//click on each card
for (let i = 0; i < cardEls.length; i++) {
    //card elements to loop over to add event listener
    const currentCardEl = cardEls[i];
    currentCardEl.addEventListener("click", handleCardClick);
}

// need to be able to click the play again button to reset game
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
    messageEl.innerText = "🧠 Test your Brain Space! 🧠";
    shuffleCardsArray(cards);

    render();
}

function render() {
    renderGameTable();
}

//Fisher-Yates Shuffle//
function shuffleCardsArray(cards) {
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0
    for (let i = cards.length - 1; i > 0; i--) {
        // pick a random index from 0 to i inclusive
        const j = Math.floor(Math.random() * (i + 1)); // at random index
        // Swap arr[i] with the element
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards);
}


function renderGameTable() {
    // needs to track where cards are
    //to set state (new game and changes)
    //loop through the game table - if 0(meaning no card value) -> set card
    for (let i = 0; i < gameTable.length; i++) {
        const currentTableIdx = gameTable[i];
        const currentEmoji = cards[i];
        const currentCardElIdx = cardEls[i];
        //when 0 - set current index to the value of card[i]
        if (currentTableIdx === 1) {
            currentCardElIdx.innerHTML = currentEmoji;
        } else {
            currentCardElIdx.innerHTML = "";
        }
    }
}

function checkGuess() {
    if (clickCount === 2) {
        if (cardsMatch[0] === cardsMatch[1]) {
            // if two cards match 
            pairsMatched++;
            messageEl.innerText = "Great Match! Keep Going!";
            handleGuess();
            if (pairsMatched === cards.length / 2) {
                messageEl.innerHTML = "YOU WIN! 🏆";
            } else if (guessesLeft === 0) {
                messageEl.innerText = "😝 YOU LOSE! START OVER! 😝";
            }
        } else {
            //if two cards don't match
            messageEl.innerText = "No Matches! 👻 Guess Again!";
            guessesLeft--;
            if (guessesLeft === 0) {
                messageEl.innerText = "😝 You're out of guesses! START OVER! 😝";
            }
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

//what happens when I click on my cards
//only click on 2 cards - 2 cards must be different cards
function handleCardClick(evt) {
    if (pairsMatched !== cards.length / 2 && guessesLeft !== 0) {
        if (gameTable[evt.target.id] === 0) {
            //if card is not showing and we click - it shows
            gameTable[evt.target.id] = 1;
            clickCount++;
            cardsMatch.push(cards[evt.target.id])

            checkGuess();
        } else {
            //if card is showing and we click - it stops showing
            gameTable[evt.target.id] = 0;
            cardsMatch = [];
            clickCount = 0;
        }
    }
    render();
}
