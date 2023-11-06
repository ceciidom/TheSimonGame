//User clicked pattern
var userClickedPattern = [];

5// new empty array called gamePattern
var gamePattern = [];

//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red","blue","green","yellow"];



function nextSequence(){
   var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

   gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
 
    playSound(randomChosenColour);

    //first key
    $("h1").text("Level 0");

}

$(".btn").click(function(userChosenColour){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

})

function playSound (name){
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();

}

function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){$("#" + currentColour).removeClass("pressed")}, 100);
    }

//Step 7 - Start the game
$("body").one("keypress", nextSequence())



