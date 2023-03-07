**Psuedocode**
<!-- Define Constants -->
Variables for Cards
- front and back

<!-- Define State Variables -->
Guess (match or no match)

. Page will load - game will start (show back of cards) All cards in play need to be displayed face down(no image showing) on "board" --> how do I display backside of card(all same design? No design? blank square?)
- array of all cards in play (squareEls?) === Cards need to be in a random order on board at start of game
. Button to re start game
. Initialize
. One Player
. Timer starts
. Play loops
 - Player will pick a card - //handle player clicking card
card needs to show image (emoji???) (addEventListener to each "card"??) (function for handling click)
 - Player will pick second card - image will show
 - Two flipped cards will be compared
    - if match - cards stay image up || player keeps pair(cards dissapear from grid // maybe collect in a corner // or stay on board with image showing, but can't be clicked)
        - message? Great match! Keep going
    - if no match - cards show back and go face down 
        - message? Bad guess, try again! 
. turn ends if match is made or if cards flip over without match 
begin another turn (keep track of turns/guesses)
loop until all cards match 
- if all cards match Game ends (possibly after a certain amount of incorrect guesses / amt of time????)
When game ends because all cards match
    - message? You did it (add amount of time it took?)
When game ends because time is up
    - message? Times Up! Better Luck next time! 
