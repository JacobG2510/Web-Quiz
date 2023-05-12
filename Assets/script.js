var question1 = 
    {
    question: 'whats web API',
    answers : [
        { text: 'Cascading Stylesheets', correct: true },
        { text: 'Application Programming Interface', correct: false }

    ]
  }

var question2 = 
    {
    question: 'what is event listener',
    answers : [
        { text: 'an event you listen to', correct: true },
        { text: 'a desgin to prosses some kind of event', correct: false }

    ]
  }

var question3 = 
    {
    question: 'whats web API',
    answers : [
        { text: 'Cascading Stylesheets', correct: true },
        { text: 'Application Programming Interface', correct: false }

    ]
  }

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerELement = document.getElementById('question-box')
var questionEL = document.getElementById('question')
var answerButtonsEL = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion
})

startButton.addEventListener('click', startQuiz)



function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    var unshuffledQuestions = [question1, question2, question3]
    shuffledQuestions = unshuffledQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerELement.classList.remove("hide")
    setNextQuestion()
}

function Timer() {
    timeInterval = setInterval(function () {
        timeLeft--;

        if(timeLeft<1) {
            clearInterval(timeInterval);
            timeLeft = 0;
            endQuiz();
        }
        Timer.textcontent = "Timer: 00:" + timeLeft;
    }, 1000);
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }

function showQuestion(question) {
    console.log(question)
    questionContainerELement.innerText = question.question.
    question.answers.forEach( answer => {
        console.log(answer)
        var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEL.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEL.firstchild) {
        answerButtonsEL.removeChild(answerButtonsEL.firstchild)
    }
}

function selectAnswer(e) {
var slelectedButton = e.target
var correct = slelectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsEL.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex)
nextButton.classList.remove("hide")
else {
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct')
}
else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}