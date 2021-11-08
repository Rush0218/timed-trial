var navEl = document.querySelector(".nav-bar")
var startBtn = document.querySelector(".start-btn"); 
var start = document.querySelector(".start-container");
var quiz = document.querySelector(".quiz-container"); 
var questionEl = document.querySelector(".quiz-question"); 
var choiceResult = document.querySelector(".choice-result"); 
var final = document.querySelector(".final-score");
var initials = document.querySelector(".submit-initials"); 
var nameField = document.querySelector("#name-field");
var initialsBtn = document.querySelector(".submit-button"); 

var optionA = document.querySelector(".a");
var optionB = document.querySelector(".b");
var optionC = document.querySelector(".c");
var optionD = document.querySelector(".d");

//timer total
var time = 75; 
var index = 0; 
var correctAnswer = 0; 

//create timer element in navbar 
var timerEl = document.createElement("h1"); 
timerEl.textContent = "Timer: " + 0; 
navEl.appendChild(timerEl); 

//create an array of quetsions
let questions = [
    {
        question: "What does API stand for?",
        options: ["A: Application Program Internet", "B: Applying Programming Interface", "C: Application Programming Interface", "D: Application Property Integrity"],
        answer: "C: Application Programming Interface"
    }, 
    { 
        question: "Which is not a JavaScript data type?", 
        options: ["A: Number","B: string","C: Item", "D: Boolean"],
        answer: "C: Item", 
    }, 
    { 
        question: "What does HTML stand for?",  
        options: ["A: Hypertype Markup Language", "B: Highertext Markup Language", "C: Hypertext Markup Language", "D: Highertext Marking Language"],
        answer: "C: Hypertext Markup Language"
        
    }, 
    {
        question: "What year was JavaScript created?",  
        options: ["A: 1995", "B: 1991", "C: 1972", "D: 1983"],
        answer: "A: 1995"
    }, 
    {
        question: "How do you create a flexbox?", 
        options: ["A: display: flexbox;", "B: display: flex", "C: display: box", "D: display: flex-box;"],
        answer: "B: display: flex"
    }  
]

//create function to control the timer for quiz
var quizTime = function() {
    //create function for timer
    var timer = setInterval(function() { 
        if(index >= questions.length || time === 0) {
            clearInterval(timer); 
            endQuiz(); 
        } else {
            timerEl.textContent = "Timer: " + time; 
            time--;
            return time;  
        }
        return time; 
    }, 1000);
}; 

//create function to display questions one at a time. 
var beginQuiz = function() {
    // remove  start-quiz section
    start.setAttribute("style", "display: none"); 
    quizTime(); 
    //display first question
    showQuestions(); 
}; 

//create function to end quiz when all questions are answered or time has ran out. 
var endQuiz = function () {
    clearInterval(quizTime);
    timerEl.setAttribute("style", "display: none");
    quiz.setAttribute("style", "display: none");
    choiceResult.setAttribute("style", "display: none");
    initials.setAttribute("style", "display: flex"); 
    final.textContent = "Your final score is " + time; 
}; 

//assign array content to quiz question/options
var showQuestions = function(){
    questionEl.textContent = questions[index].question
    optionA.textContent = questions[index].options[0]; 
    optionB.textContent = questions[index].options[1];
    optionC.textContent = questions[index].options[2];
    optionD.textContent = questions[index].options[3];
    quiz.setAttribute("style", "display: flex"); 
}; 

//check to see if the answer chosen is correct
var checkAnswer = function(answer) {
    if(questions[index].answer === questions[index].options[answer]) {
        correctAnswer++
        choiceResult.setAttribute("style", "display: block"); 
        choiceResult.textContent = "Correct!";
    } else {
        time -= 10; 
        timerEl.textContent = "Timer: " + time;
        choiceResult.setAttribute("style", "display: block"); 
        choiceResult.textContent = "Incorrect!";
    } 
    index++; 
    if(index < questions.length) {
        showQuestions(); 
    } else {
        endQuiz(); 
    }
}; 
 
//create function to hold highscore
var highScore = function() { 
    if (nameField.value === "") {
        alert("You must enter your initials!");
        return;
    } else {
           const score = {
            name: nameField.value.trim(), 
            score: time
        } 
        const highscoreLocal = localStorage.setItem("highscore", JSON.stringify(score)) || [];
        highscoreLocal.push(score)
    }
    window.location.href= "highscore.html";
};

//create functions to check and see if answer chosen is correct
var pickedA = function() {checkAnswer(0)};
var pickedB = function() {checkAnswer(1)}; 
var pickedC = function() {checkAnswer(2)}; 
var pickedD = function() {checkAnswer(3)}; 

//event listeners for the question options
startBtn.addEventListener("click", beginQuiz); 
optionA.addEventListener("click", pickedA); 
optionB.addEventListener("click", pickedB); 
optionC.addEventListener("click", pickedC); 
optionD.addEventListener("click", pickedD);
initialsBtn.addEventListener("click", highScore);