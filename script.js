let gameStarting = false;
  
  var humanScore = 0;
var computerScore = 0;



let gameStartingb = false;
  
  var humanScoreb = 0;
var computerScoreb = 0;
  var target = 0;
  function shplcom() {
   
    var chal = document.getElementById("chalange");
    
     var shoTarget = document.getElementById("shoTarget").innerHTML = "Target:" + chal.value;
     
     if(chal.value == '') {
       
       alert("please give challenge");
     }else {
      var gameCobtainer = document.getElementById("gameCobtainer").style.display  = "block";
     }
  }
  
  function hiplcom() {
   var gameCobtainer = document.getElementById("gameCobtainer").style.display  = "none";
  }
  
  
   document.getElementById("rock").onclick = playRock;
  
   document.getElementById("paper").onclick = playPaper;
   document.getElementById("scissors").onclick = playScissors;
  
  function playRock() {
   play("rock");
  }
  
  function playPaper() {
   play("paper");
  }
  
  function playScissors() {
   play("scissors");
  }
  /* main function */
  function play(humanPlay) {
  
   var computerPlay = randomComputer();
   
   
   /* humanPlay rock */
   if(humanPlay == 'rock' ) {
   var playerBox = document.getElementById("playerBox").innerHTML = "rock";
   /* computerPlay rock */
    if(computerPlay == 'rock') {
     var result = document.getElementById("result").innerHTML = "Tie";
        }
    /* computerPlay rock over */
    /* computerPlay paper */
   else if(computerPlay == 'paper') {
     var result = document.getElementById("result").innerHTML = "You Lose";
     computerScore++;
        }
    /* computerPlay paper over */
    /* computerPlay scissors */
   else if(computerPlay == 'scissors') {
     var result = document.getElementById("result").innerHTML = "You Win";
     humanScore++;
        }
    /* computerPlay scissors over */
   }else {
    
   }
   /* humanPlay rock over */
   
   /* humanPlay paper */
   if(humanPlay == 'paper' ) {
   var playerBoxpaper = document.getElementById("playerBox").innerHTML = "paper";
   /* computerPlay rock */
    if(computerPlay == 'rock') {
     var result = document.getElementById("result").innerHTML = "You Win";
     
     humanScore++;
        }
    /* computerPlay rock over */
    /* computerPlay paper */
   else if(computerPlay == 'paper') {
     var result = document.getElementById("result").innerHTML = "Tie";
     
        }
    /* computerPlay paper over */
    /* computerPlay scissors */
   else if(computerPlay == 'scissors') {
     var result = document.getElementById("result").innerHTML = "You Lose";
     computerScore++;
        }
    /* computerPlay scissors over */
   }
   /* humanPlay paper over */
   
   /* humanPlay scissors */
   if(humanPlay == 'scissors' ) {
   var playerBoxscissors = document.getElementById("playerBox").innerHTML = "scissors";
   /* computerPlay rock */
    if(computerPlay == 'rock') {
     var result = document.getElementById("result").innerHTML = "You Lose";
     
    computerScore++;
        }
    /* computerPlay rock over */
    /* computerPlay paper */
   else if(computerPlay == 'paper') {
     var result = document.getElementById("result").innerHTML = "You Win";
     
      humanScore++;
        }
    /* computerPlay paper over */
    /* computerPlay scissors */
   else if(computerPlay == 'scissors') {
     var result = document.getElementById("result").innerHTML = "Tie";
     
        }
    /* computerPlay scissors over */
   }
   /* humanPlay scissors over */
   document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
   
   var chalange = document.getElementById("chalange");
   
    if(humanScore == chalange.value) {
     
        var winContainer = document.getElementById("winContainer").style.display = "block";
      
     var result = document.getElementById("result").innerHTML = " ";
     
     var playerBox = document.getElementById("playerBox").innerHTML = "";
     
     var computerBox = document.getElementById("computerBox").innerHTML = "";
     
     var winImg = document.getElementById("winImg").style.display = "block";
     
     var wintie = document.getElementById("wintie").style.display = "block";
     
     var gameCobtainer = document.getElementById("gameCobtainer").style.display  = "none";
     
     var winre = regame();
     
    }else if(computerScore == chalange.value){
     
        var winContainer = document.getElementById("winContainer").style.display = "block";
     
var result = document.getElementById("result").innerHTML = " ";
     
     var playerBox = document.getElementById("playerBox").innerHTML = "";
     
     var computerBox = document.getElementById("computerBox").innerHTML = " ";
     
     var gameoverWin = document.getElementById("gameoverWin").style.display = "block";
     
     var gameCobtainer = document.getElementById("gameCobtainer").style.display  = "none";
     
     var winre = regame();     
    }
    else {
     
    }
    
    
  }
  /* main function over */
  
  /* random */
  function randomComputer() {
  
  var rps = ['rock','paper','scissors'];
  
  var play = rps[Math.floor(Math.random() * rps.length)];
  
  var computerBox = document.getElementById("computerBox").innerHTML = play;
  
  return play;
  } 
  
  function regame() {
  
  gameStarting = true;
  
   humanScore = 0;
 computerScore = 0;
 
 var result = document.getElementById("result").innerHTML = " ";
 
 var playerBox = document.getElementById("playerBox").innerHTML = "";
 
 var computerBox = document.getElementById("computerBox").innerHTML = " ";
 
 
 
 play();
 
  }
  /* restart */
function restartcon() {
    if (gameStarting == false) {
       regame();
  
  
    }
    else if(gameStarting == true)
    {
     regame();
     
    }
    else{
          return
    }
 
} 

/* win close */

function clowin() {
 var winContainer = document.getElementById("winContainer").style.display = "none";
}
