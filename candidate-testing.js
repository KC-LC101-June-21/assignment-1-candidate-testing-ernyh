const input = require('readline-sync');


//useless variables
  let correctAnswer = "Sally Ride";
  let question =   "Who was the first American woman in space? ";
  let candidateAnswer = "Sally Ride";

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
let candidateAnswers = [];

function askForName() {
candidateName = input.question("Enter candidate name: ");
console.log();
}

function askQuestion() {
  let i = 0;
  for (i = 0; i < questions.length; i++ ){
  candidateAnswers[i] = input.question(questions[i]);
  console.log();
}
}

function gradeQuiz(candidateAnswers) {
let grade = 0;
let correct = 0;
let status;
let i = 0;

for(i= 0; i < questions.length; i++){
console.log(`${i+1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
`);
if(String(candidateAnswers[i]).toLowerCase() === String(correctAnswers[i]).toLowerCase()){
  correct++;
}
}
grade = correct *100 / 5;
if(grade >= 80)
{
status = "PASSED";
}
else{
  status = "FAILED";
}

console.log(`>>> Overall Grade: ${grade}% (${correct} of 5 responses correct) <<<
>>> Status: ${status} <<<`);

return grade;
}

function runProgram() {

  askForName();
  console.log("Greetings " + candidateName + ".\n" );
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};