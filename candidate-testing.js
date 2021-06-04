const input = require('readline-sync');

let candidateName = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
  ];
let correctAnswers = [
  "Sally Ride", 
  "true" , 
  "40" , 
  "Trajectory", 
  "3" 
  ];
let candidateAnswers = [
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank"];

function askForName() {
candidateName = input.question("Enter candidate name: ");
}

function askQuestion() {
  let i = 0;
  for (i = 0; i < 5; i++ ){
  candidateAnswers[i] = input.question(questions[i]);
}
}


function gradeQuiz() {
let grade = 0;
let i = 0;
for(i= 0; i < 5; i++){
console.log(`${i+1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
`);
if(candidateAnswers[i] === correctAnswers){
  //FIXME
}
}

//FIXME grade *100 / 5; teturn grade

}

function runProgram() {
  let grade;

  askForName();
  console.log("Greetings " + candidateName + "." );
  askQuestion();

  //FIXME
  grade = gradeQuiz();

//FIXME
console.log(`>>> Overall Grade: ${gradePercent}% (${grade} of 5 responses correct) <<<
>>> Status: FAILED <<<`);

  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  //question: question,
  //correctAnswer: correctAnswer,
  //candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};