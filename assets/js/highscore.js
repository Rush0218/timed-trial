var highscoreList = document.querySelector(".highscore-list");
var highscoreL = JSON.parse(localStorage.getItem("highscore")) || [];

var clearBtn = document.querySelector(".clear-scores-btn");

console.log(highscoreL)

highscoreList.innerHTML = localStorage.getItem("highscore");
//console.log(highscoreList.innerHTML = highscoreL
 //   .map(score => {
  //return `<li class="highscore-list"> ${score.name} - ${score.score} </li>`;
//})
//.join(""))




//var listEl = document.createElement("li"); 
//listEl.innerHTML = highscoreL
//highscoreList.appendChild(listEl); 


//create function to clear list and local storage 
var clearList = () => {
    highscoreList.remove();
    localStorage.clear("score");
}

clearBtn.addEventListener("click", clearList); 

