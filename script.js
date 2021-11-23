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

//Initial game function
function init() {
    colorDisplay.textContent = pickedColor; 
    setupSquares(); 
    setupMode(); 
    reset(); 
}

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

//Chose mode easy or hard -> easy is 3 squares and hard is 6 squares
function setupMode() {
    //loop through easy and hard button
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var i = 0; i < modeButtons.length; i++){
                //remove class .selected from clicked button
                modeButtons[i].classList.remove("selected");
            }

            //add selected class to buttons
            this.classList.add("selected"); 

            //if easy button is clicked change number of squares to 3
            if(this.textContent === "Easy"){
                numSquares = 3; 
            //else keep number of squares as 6
            } else {
                numSquares = 6;
            }
            reset(); 
        });
    }
}

//Reset function
function reset() {
    colors = genRandomColors(numSquares); 
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor; 
    h1.style.backgroundColor = "#2c6d99"; 
    messageDisplay.textContent = ""; 

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = "none"; 
        }
    }
}

//Change display color and square colors
function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color; 
        h1.style.backgroundColor = color; 
    }
}

//Add random colors to colors[]
function chooseColor() {
    var random = Math.floor(Math.random() *  colors.length);
    return colors[random]; 
}

//Generate random colors
function genRandomColors(num) {
    //create empty array
    var arr = []; 
    //add color to array
    for(var i = 0; i < num; i++){
        arr.push(makeColor()); 
    }

    //return array with colors
    return arr; 
}

//Make rgb color
function makeColor() {
    //returns the largest integer less than or equal to a random number multiplied with 256
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 

    //returns all the values in rgb format
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
