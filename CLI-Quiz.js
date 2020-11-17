//Self-Quiz
var readlinesync = require("readline-sync");

var userScore = 0;
var userName =readlinesync.question("What is your name? ");

console.log("Welcome "+userName);

var leaderBoard = {
  name : "Renu",
  score : 5,
}

function quiz(question,answer){
  var userAnswer = readlinesync.question(question);
  if(userAnswer === answer){
    console.log("Right Answer!!");
    userScore++;
    console.log(userScore);
  }
  else{
     console.log("Wrong Answer!!");
     console.log("Current score is "+userScore);

  }
}

var questions =[
  {
    question:"Where do owner live?",
    answer:"Bangalore"
  },
  {
    question:"Hobby of owner?",
    answer:"Driving"
  },
  {
    question:"what owner love the most?",
    answer:"Tennis"
  },
  {
    question:"what is her brother name?",
    answer:"Dannie"
  },
  {
    question:"What she loves to drink?",
    answer:"Coffee"
  }
];

for(var i=0; i < questions.length; i++){
  var curQuestion =questions[i];
  quiz(curQuestion.question,curQuestion.answer);

}

console.log('hey ' + userName + ' You Scored: ', userScore);
console.log('Current Leaderboard', leaderBoard);
