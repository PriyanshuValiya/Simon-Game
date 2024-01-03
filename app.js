let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "blue", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Step 1 : Start the Game.
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
  btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
     btn.classList.remove("userFlash");
    }, 250);
 }

// Step 2 : To Flash any Button and do level-up.
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

   // Random Button Choose.
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML = `Game Over :( <br><br>Your Score : <b>${level}</b><br>Press Any Key To Restart Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "rgb(102, 102, 230)";  
        }, 150)
        reset();
    }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
