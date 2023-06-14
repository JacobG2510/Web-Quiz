quizQuestions = [
    {
      question: "What are attributes in html?",
      choices: ["Stats for an object", "A modifier of elemental types", "Stats for a video game character", "Additional qualities"],
      answer: "a modifier of elemental types"
    },
    {
      question: "What some css commands?",
      choices: ["div", "function", "border-radius", "arrays"],
      answer: "border-radius"
    },
    {
      question: "What is javascript and its purpose",
      choices: ["to put the lay out of the page", "to style the page", "to make the functions work", "to lay out the website plan"],
      answer: "to make the functions work"
    }

  ];
  
  var startButton = document.getElementById("start-button");
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var timerElement = document.getElementById("timer");
  var currentQuestionIndex = 0;
  var timeLeft = 60;

  // Function to start the quiz
function startQuiz() {
    console.log("working")
    startButton.style.display = "none";
    showQuestion();
    startTimer();
  
    choicesElement.addEventListener("click", function(event) {
      if (event.target.matches("button")) {
        checkAnswer(event.target.textContent);
      }
    });
  }
  
  // Function to show a question
  function showQuestion() {
    var question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    // Create buttons for each choice
    question.choices.forEach(choice => {
      var button = document.createElement("button");
      button.textContent = choice;
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedChoice) {
    var question = quizQuestions[currentQuestionIndex];
  
    if (selectedChoice === question.answer) {
      currentQuestionIndex++;
      if (currentQuestionIndex === quizQuestions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    } else {
      // Incorrect answer
      timeLeft -= 10;
      if (timeLeft <= 0) {
        timeLeft = 0;
        endQuiz();
      } else {
        currentQuestionIndex++;
        if (currentQuestionIndex === quizQuestions.length) {
          endQuiz();
        } else {
          showQuestion();
        }
      }
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerElement.textContent = timeLeft;
  
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    var initials = prompt("enter your initials:");
    var score = timeLeft;

    var result = {
      initials: initials,
      score: score
    };
    var results = JSON.parse(localStorage.getItem("quizResults")) || []
    SpeechRecognitionResultList.push(result);
    localStorage.setItem("quizResults", JSON.stringify(results));

  }
  

  startButton.addEventListener("click", startQuiz);
  
  
  
  
  
  
  