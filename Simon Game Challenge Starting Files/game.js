//User clicked pattern
var userClickedPattern = [];

5// new empty array called gamePattern
var gamePattern = [];

//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red","blue","green","yellow"];

//Step 7 - Start the game
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
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





