// /*----- constants -----*/
// //cards for game play
// //array of random ordered cards
// const cards = ["🖤", "🙄", "💯", "🌈", "💯", "🌈", "🖤", "🙄"];
// const maxGuesses = 8;

// /*----- state variables -----*/
// let cardsMatch = [];
// let clickCount;
// // when array has 2 cards - full - compare
// let gameTable = [];
// let guessCount;
// //every 2 clicks needs to add up to "1 move" and "minus 1 guess"
// let guessesLeft;
// let winner;

// /*----- cached elements  -----*/
// const playAgainEl = document.querySelector("button")
// const countEl = document.querySelector(".number-of-moves")
// const messageEl = document.querySelector(".message-updates")
// const cardEls = document.querySelectorAll(".card")

// /*----- event listeners -----*/
// // need to be able to click on cards - show image - compare two cards - decide if they will stay or images hide again
// //click on each card
// for (let i = 0; i < cardEls.length; i++) {
//     const currentCardEl = cardEls[i]
//     currentCardEl.addEventListener("click", handleCardClick)
//     console.log(currentCardEl)
// }

// // need to be able to click the play again button to reset game
// //array of card elements to loop over to add event listener
// playAgainEl.addEventListener("click", init)

// /*----- functions -----*/
// //initialize game
// init();
// function init() {
//     // 0 === cards not showing || 1 === cards showing
//     clicks = 0;
//     gameTable = [0, 0, 0, 0, 0, 0, 0, 0] //random assortment of 8 
//     guessesLeft = maxGuesses;
//     guessCount = 0;
//     winner = null;
//     render();
//     console.log("Game is re-set!!!")
// }

// function render() {
//     renderGameTable();
//     renderGuessCount();
//     renderMessages();
//     renderCheckMatch();
// }

// function renderGameTable() {
//     // // needs to track where cards are
//     //to set state (new game)
//     //loop through the game table - if 0(meaning no card value) -> set card
//     for (let i = 0; i < gameTable.length; i++) {
//         const currentTableIdx = gameTable[i]
//         const currentEmoji = cards[i]
//         const currentCardElIdx = cardEls[i]
//         //when 0 - set current index to the value of card[i]
//         if (currentTableIdx === 1) {
//             currentCardElIdx.innerHTML = currentEmoji;
//         } else {
//             currentCardElIdx.innerHTML = ""
//         }
//     }

// }

// function renderGuessCount() {
//     //start game with zero guess count
//     // add one guess count for every 2 cards clicked
// }

// function renderMessages() {
//     //message for match made
//     //message for no match
//     //message for loss (over max guess count)
//     //message for win (all matches made)

// }
// // do messages and checkMatch do the same thing??

// function renderCheckMatch() {
//     //allwo for two clicks and then check 
//     //if statement to compare two cards
//     // if match made message match made
//     // if no match message try again
//     // if all cards match message great job
//     // if guess count > max guess message you lose
// }

// function checkWinner() {
//     //as cards match - do all cards match? all cards match < maxGuesses === winner
// }

// function gameOver() {
//     // if guessCount > maxGuesses == you lose, game over
//     // if all cards match == you win, game over, play again
// }

// // trying to figure out what happens when I click on my cards
// function handleCardClick(evt) {
//     gameTable[evt.target.id] = 1;
//     render();
// }

const colorArr = ['dodgerblue', 'orange', 'dodgerblue', 'orange']
const cardLocations = document.querySelectorAll('.hidden')
let clicks = 0
let clickedCards = []
let pairsMatched = 0

function init(cardArr) {
    cardArr.forEach((card, idx) => {
        card.setAttribute('class', `hidden ${colorArr[idx]}`)
        card.addEventListener('click', (event) => {
            clicks++
            console.log("Here is my current clicks amount: ", clicks)
            // console.log(event.target) //This works, so callback to another function
            checkClassValue(event)
        })
    })

}

function checkClassValue(expectedEvent) {
    console.log(expectedEvent.target.className)
    if (expectedEvent.target.className.includes('hidden')) {
        expectedEvent.target.classList.remove('hidden')
        //Push into our clickedCards array 
        clickedCards.push(expectedEvent.target.classList)
        console.log(clickedCards)
        //This is a oneliner so we don't need curly brackets or the return keyword
        //the return keyword is implied on oneliners
        if (clicks === 2) checkValues(expectedEvent)
    } else if (!expectedEvent.target.className.includes('hidden')) {
        // console.log("There is no hidden value! See for yourself: ", expectedEvent.target.className)
        //Flip the card back over. Could be useful if there is not a match
        expectedEvent.target.classList.add('hidden')
    }
}

function checkValues(expectedEvent) {
    //Compare cards 
    //NOTE: YOU MAY NEED A WAY TO CHECK AGAINST EACH CARD MAYBE ANOTHER CONSTANT THAT IS AN ARRAY, AND HAS THE VALUES OF THE CLASS -> let cardsMatched = []
    console.log("There are 2 clicks, which means that there are two cards to compare against")
    if (clickedCards[0].value === clickedCards[1].value) {
        //Rest trackers: clicked and clickedCards
        //Callback to renderBoardVariables()
        renderBoardVariables()
        //Increment pairs matched
        incrementPairs()
        //Stretch goal: Track the clicked cards. If the cliced cards have already been registered as a match, then display a message that says you cannot use this card OR you can remove the event listener as well
    }
}

function renderBoardVariables() {
    console.log("There's a match: ", clickedCards[0].value, clickedCards[1].value)
    clicks = 0
    clickedCards = []
}

function incrementPairs() {
    pairsMatched++
    console.log(pairsMatched)
    //Check for a win
    checkWin()
}

function checkWin() {
    //Check the pairsMatched variable
    //Append a DOM message to the browser -> and this would be MVP!
}

init(cardLocations)