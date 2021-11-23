//Variables
var numSquares = 6; 
var colors = [];
var pickedColor; 

var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

//Functions 

//Square color function
function setupSquares() {
    //loop for every square
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
        squares[i].addEventListener("click", function(){
            //set the clicked color to its background color
            var clickedColor = this.style.backgroundColor; 
            //if the clicked color matches the picked color set message to correct and show play again button
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play again";
                changeColors(pickedColor); 
            //else change the background color to black and set message to try again
            } else {
                this.style.backgroundColor = "#232323"; 
                messageDisplay.textContent = "Try again"; 
            }
        });
    }
}

