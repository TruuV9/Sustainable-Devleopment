const questions = [
  "Question 1: How do you feel about sustainability?",
  "Question 2: Do you recycle regularly?",
  "Question 3: How often do you walk instead of driving?",
  "Question 4: Do you avoid single-use plastics?",
  "Question 5: How often do you conserve energy at home?"
];
const answers = [];
let currentQuestion = 0;

function displayQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById("questions").textContent = questions[currentQuestion];
  } else {
    showScore();
  }
}

function submitAnswer(value) {
  answers.push(value);
  currentQuestion++;
  displayQuestion();
}

function showScore() {
  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  document.getElementById("questions").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your total score is: ${totalScore}`;
  scoreElement.style.display = "block";
}

// Start the survey by displaying the first question
displayQuestion();

  