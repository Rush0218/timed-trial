var highscoreList = document.querySelector(".highscore-list");
var highscoreL = JSON.parse(localStorage.getItem("highscore")) || [];

highscoreList.innerHTML = localStorage.getItem("highscore");

//create function to clear list and local storage 
var clearBtn = document.querySelector(".clear-scores-btn");
var clearList = () => {
    highscoreList.remove();
    localStorage.clear("score");
}

clearBtn.addEventListener("click", clearList); 

