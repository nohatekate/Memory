// Memory Game 
-find all the matching pairs
-single player

**MVP**
- Use "cards" or other theme
- Will need to display "wrong" guess until a timer expires or until the next click.
- Must lose after a certain amount of time or after X number of bad guesses.
- `README.md` file with these sections:
    - Your game's title: A description of your game.  Background info of the game is a nice touch.
    - Screenshot(s): Images of your actual game.
    - Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...
    - Getting Started: In this section include the link to your deployed game and any instructions you deem important.
1. Render a game in the browser**.
2. Include win/loss logic and render win/loss messages in HTML. Popup alerts using the `alert()` method are okay during development, but not production.
3. Include separate HTML, CSS & JavaScript files.
4. Use vanilla JavaScript, not jQuery.
5. Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
6. No remaining unused and/or commented out code (code that will never be called) .
7. Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.
8. Be coded in a consistent manner. For example, choose between your preference for function declarations vs. function expressions.
9. Be deployed online** using GitHub Pages so that the rest of the world can play your game!

**Psuedocode**

I need an array of all cards in play (how many cards ??? all cards must have one matching card -- 20 cards total? === 10 different cards === 4x5 grid)
card === square Elements? Create each card/element
All cards in play need to be displayed face down(no image showing) on "board" --> how do I display backside of card(all same design? No design? blank square?)
Cards need to be in a random order on board at start of game

Player - pick one card //handle player clicking card
card needs to show image (emoji???) (addEventListener to each "card"??) (function for handling click)
Player - pick second card


two flipped cards need to be compared 
if images are the same - player keeps pair(cards dissapear from grid // maybe collect in a corner // or stay on board with image showing, but can't be clicked)
if images are different - cards flip back over and show no image

turn ends if match is made or if cards flip over without match 
begin another turn 

repeat until all cards match
Game ends when all cards match (possibly after a certain amoutn of incorrect guesses / amt of time????)


Rules:
Cards start face down
Player takes turn by turning over two cards
if two cards match player keeps cards
if two cards don't match - cards flip back over
game over when all cards match 

**Planned Future Enhancements**
  - Shuffle All Cards-- Possibly Add On Later
  - Timer Possibly Add On Later 
use timer for tracking how long it takes player to make all matching pairs
keep track of best time???
  - card needs to flip to show image (addEventListener???)
  - Keep Track of turns ???? how many turns to win

https://excalidraw.com/#json=H9_7MkksRv6yMVjNMy1DM,t-7nJhcbdDbQpFclek9vzA