// Memory Game 
-find all the matching pairs
-single player

// Start Game

**Shuffle All Cards** Possibly Add On Later

I need an array of all cards in play (how many cards ??? all cards must have one matching card -- 20 cards total? === 10 different cards === 4x5 grid)
card === square Elements? Create each card/element
All cards in play need to be displayed face down(no image showing) on "board" --> how do I display backside of card(all same design? No design? blank square?)
Cards need to be in a random order on board at start of game

**Timer** Possibly Add On Later 
use timer for tracking how long it takes player to make all matching pairs
keep track of best time???

Player - pick one card //handle player clicking card
card needs to flip to show image (emoji???) (addEventListener to each "card"??) (function for handling click)
Player - pick second card
card needs to flip to show image (addEventListener???)

two flipped cards need to be compared 
if images are the same - player keeps pair(cards dissapear from grid // maybe collect in a corner // or stay on board with image showing, but can't be clicked)
if images are different - cards flip back over and show no image

turn ends if match is made or if cards flip over without match 
begin another turn 
Keep Track of turns????
repeat until all cards match
Game ends when all cards match (possibly after a certain amoutn of incorrect guesses / amt of time????)


Rules:
Cards start face down
Player takes turn by turning over two cards
if two cards match player keeps cards
if two cards don't match - cards flip back over
game over when all cards match 

https://excalidraw.com/#json=H9_7MkksRv6yMVjNMy1DM,t-7nJhcbdDbQpFclek9vzA