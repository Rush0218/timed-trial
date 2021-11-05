var navEl = document.querySelector(".navBar")
var startBtn = document.querySelector(".start-btn"); 
var quizSection = document.querySelector(".quiz-section"); 
var answerOption = document.querySelector(".answer-options"); 
var answerResult = document.querySelector(".answer-result"); 
var h1El = document.createElement("h1"); 
var totalTime = 75; 

// create timer element in navbar 
h1El.textContent = "Timer: " + 0; 
navEl.appendChild(h1El); 


// create click event on the start button to start a quiz. 
startBtn.addEventListener("click", function() {

    // create function for timer
    var timerInterval = setInterval(function() { 
        h1El.textContent = "Timer: " + totalTime; 
        //document.getElementById("time-left").innerHTML="Timer: " + totalTime; 
        totalTime--; 
        if (totalTime < 0) {
            clearInterval(timerInterval);
        }
    }, 1000); 
    // remove the start quiz section
    var quizStart = document.querySelector(".start-section"); 
    quizStart.remove(); 

    beginQuestions(); 
}); 


// create function to display questions one at a time. 
var beginQuestions = function () {
    
}






































var questions = [
    {
     numbr: 1, 
     question: "What does API stand for?", 
     answer: "Application Programming Interface", 
     options: [
         "Application Program Internet", 
         "Applying Programming Interface", 
         "Application Programming Interface", 
         "Application Property Integrity"]
    }, 
    {
     numbr: 2, 
     question: "Which is not a JavaScript data type?", 
     answer: "Item", 
     options: [
         "Number", 
         "string", 
         "Item", 
         "Boolean"]
    }, 
    {
     numbr: 3, 
     question: "What does HTML stand for?", 
     answer: "Hypertext Markup Language", 
     options: [
         "Hypertype Markup Language",
         "Highertext Markup Language",
         "Hypertext Markup Language", 
         "Highertext Marking Language"
     ]
    }, 
    {
     numbr: 4, 
     question: "True or False, You do not need JavaScript to create a website.", 
     answer: "True", 
     options: [
         "True", 
         "False"
     ]  
    }, 
    {
     numbr: 5, 
     question: "How do you create a flexbox?", 
     answer: "display: flex;", 
     options: [
         "display: flexbox;", 
         "display: flex", 
         "display: box", 
         "display: flex-box;"
     ]   
    }  
   ]