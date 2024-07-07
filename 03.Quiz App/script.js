const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },

  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },

  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let curQuestionsIndex = 0;
let score = 0;

const starQuiz = function () {
  curQuestionsIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = function () {
  resetState();

  let curQuestion = questions[curQuestionsIndex];
  let questionNo = curQuestionsIndex + 1;
  questionElement.innerHTML = questionNo + ". " + curQuestion.question;

  curQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
};

//this will remove the previous answers fields
const resetState = function () {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

const selectAnswer = function (e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // to display the green or red colors
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  //display correct answer and display nextBtn if either wrong or correct
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};

const showScore = function () {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

  if (score === questions.length) {
    nextBtn.innerHTML = "Congratulations You Passed!";
    nextBtn.style.display = "block";
  } else {
    nextBtn.innerHTML = "Try again!";
    nextBtn.style.display = "block";
  }
};

//this will return the next question when the next btn is clicked
const handleNextButton = function () {
  curQuestionsIndex++;
  if (curQuestionsIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextBtn.addEventListener("click", () => {
  if (curQuestionsIndex < questions.length) {
    handleNextButton();
  } else {
    starQuiz();
  }
});

starQuiz();
