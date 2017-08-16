console.log("security_questions.js loaded");
var securityQuestions = [
{
  question: "What is your favorite color? ",
  expectedAnswer: "Blue"
},
{
  question: "What was your first pet's name?",
  expectedAnswer: "Spot"
},
{
  question: "Where is your hometown?",
  expectedAnswer: "Miami"
}
];
var userAnswer = "";
var intruder = false;
for(var i = 0; i < securityQuestions.length; i++){
  userAnswer = prompt(securityQuestions[i].question);
  //if the answer does match, ask the next question * if the answer doesn't match, stop asking questions and pop up an alert message
  if(userAnswer !== securityQuestions[i].expectedAnswer) {
    alert("Incorrect Response");
    intruder = true;
    break;
  }
}

  if(intruder) {
    console.log("Stop!");
  }
