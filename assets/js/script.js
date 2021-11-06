var navEl = document.querySelector(".nav-bar")
var startBtn = document.querySelector(".start-btn"); 
var start = document.querySelector(".start-container");
var quiz = document.querySelector(".quiz-container"); 
var Choices = document.querySelector(".quiz-options"); 
var questionEl = document.querySelector(".quiz-question"); 
var choiceResult = document.querySelector(".choice-result"); 
var initials = document.querySelector(".submit-initials"); 
var timerEl = document.createElement("h1"); 


var optionA = document.querySelector(".a");
var optionB = document.querySelector(".b");
var optionC = document.querySelector(".c");
var optionD = document.querySelector(".d");



//timer total
var time = 75; 
var index = 0; 
var correctAnswer = 0; 

// create timer element in navbar 
timerEl.textContent = "Timer: " + 0; 
navEl.appendChild(timerEl); 



// create an array of quetsions
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
        question: "True or False, You do not need JavaScript to create a website.",  
        options: ["A: True", "B: False"],
        answer: "A: True"
    }, 
    {
        question: "How do you create a flexbox?", 
        options: ["A: display: flexbox;", "B: display: flex", "C: display: box", "D: display: flex-box;"],
        answer: "B: display: flex"
    }  
]



// create click event on the start button to start a quiz. 
startBtn.addEventListener("click", function() {
    // create function for timer
    var timer = setInterval(function() { 
        timerEl.textContent = "Timer: " + time; 
        time--; 
        if (index >= questions.length || time < 0) {
            clearInterval(timer);
            quizOver(); 
        }
    }, 1000);
    beginQuiz(); 
}); 



// create function to display questions one at a time. 
var beginQuiz = function() {
    // remove  start-quiz section
    start.setAttribute("style", "display: none"); 
    
    //display first question
    showQuestions(); 
}; 


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
        //add text content for results section
    } 
    index++; 
    if(index < questions.length) {
        showQuestions(); 
    } else {
        quizOver(); 
    }
}; 



var pickedA = function() {checkAnswer(0)};
var pickedB = function() {checkAnswer(1)}; 
var pickedC = function() {checkAnswer(2)}; 
var pickedD = function() {checkAnswer(3)}; 







var quizOver = function () {
    
}

// created a function to to display the results of each answered question. 
var showResults = function() {
    
};


//event listeners for the question options
optionA.addEventListener("click", pickedA); 
optionB.addEventListener("click", pickedB); 
optionC.addEventListener("click", pickedC); 
optionD.addEventListener("click", pickedD); 
















