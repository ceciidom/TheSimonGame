//User clicked pattern
var userClickedPattern = [];

5// new empty array called gamePattern
var gamePattern = [];

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
  level++;
  $("#level-title").text("Level " + level);

}
userTurn();

function userTurn(){
 $(".btn").click(function (userChosenColour) {
   var userChosenColour = $(this).attr("id");

   playSound(userChosenColour);
   animatePress(userChosenColour);
   userClickedPattern.push(userChosenColour);
 });
  //user click on button
  //button makes sound and flashes
 
  //color gets loaded to the user's pattern
  //keep clicking until the user's clicked pattern is the same length as the game pattern.
  
  var currentLevel = level;
  checkAnswers(currentLevel);
  
  //after the same number of clicks as the gamePattern.length --> check answers()
  //empty users pattern
  
   
}


function playSound (name){
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();

}

function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){$("#" + currentColour).removeClass("pressed")}, 100);
    }

//Check the user's answers againstthe game sequence

function checkAnswers (currentLevel){

  if (userClickedPattern.toString() === gamePattern.toString()){
    console.log ("Success! you move to the next level");
       
    setTimeout(nextSequence, 1500);

  } else { GameOver () 
    }
  }

  function GameOver(){
    console.log("Wronganswer");
    $("h1").text("Game Over, Press Any Key to Start");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")}, 300);
    started = false;
    currentlevel = 0;
  }




