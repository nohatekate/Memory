SCHEDULE
Day 1 - Tuesday 
    ✔ Project Set Up (Github)
    ✔ Build Primary Game board
    ✔ Stretch / Planning
Day 2 - Wednesday 
    - Initial State + Render
    	Create & Display State 
Identify DOM elements that will need to be updated
Create and set starting values for each state
Create render() and verify the DOM shows state in the browser
	✔ Invoke render() in init()
Create helper functions to control changes in state / browser
Functions should describe changes in game play. 
	Render functions might include:
renderScore() 
renderAnswers() 
renderOptions()
Controller functions might include 
updateQuestion()
shuffleCards()
checkWinner()
gameOver() 
Manually update state to play game (start -> end game) 
	Call helper functions() in the order they would be triggered 
	Testing may be manual (invoking them after init() or using browser console
	Verify the game can be played through manually

Stretch / Planning
	Link your UI interactive elements to the handler functions
	Research advanced CSS feature for future development

Day 3 - Thurdsay 
    Interactions + UI Updates
Day 4 - Friday 
    - Gameplay + Stretch Goals
Day 5 - Saturday (weekend)
    -Stretch Goals + Styling
Day 6 - Sunday (weekend)
    -Documentation

https://github.com/nohatekate/Memory

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
