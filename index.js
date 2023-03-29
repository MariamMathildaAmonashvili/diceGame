let player1 = document.getElementById("name-0");
let player2 = document.getElementById("name-1");
let dice5 = document.querySelector(".dice");
let player1Score = document.getElementById("current-0");
let player2Score = document.getElementById("current-1");
let player1Mainscore = document.getElementById("score-0");
let player2Mainscore = document.getElementById("score-1");
let rollingDice = document.querySelector(".btn-roll");
let holdDice = document.querySelector(".btn-hold");
let dicesrc = document.querySelector(".dice");
let active = 0;
let score = [0, 0];
let temporary = 0;

function start() {
  resetScore();
}

function resetScore() {
  player1Mainscore.innerHTML = 0;
  player2Mainscore.innerHTML = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  dice5.style.display = "none";
  if (active === 1) {
    document.querySelector(`.player-0-panel`).classList.add("active");
    document.querySelector(`.player-1-panel`).classList.remove("active");
  }
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  dice5.style.display = "block";
  dice5.src = "dice-" + dice + ".png";
  temporary += dice;
  document.querySelector(`#current-${active}`).innerHTML = temporary;
  if (dice === 1) {
    temporary = 0;
    document.querySelector(`#current-${active}`).innerHTML = temporary;
    changePlayer();
  }
}

function changePlayer() {
  if (active === 0) {
    document.querySelector(`.player-1-panel`).classList.add("active");
    document.querySelector(`.player-0-panel`).classList.remove("active");
    active = 1;
  } else {
    document.querySelector(`.player-0-panel`).classList.add("active");
    document.querySelector(`.player-1-panel`).classList.remove("active");
    active = 0;
  }
}

function holdScore() {
  score[active] += temporary;
  document.querySelector(`#score-${active}`).innerHTML = score[active];
  document.querySelector(`#current-${active}`).innerHTML = 0;
  temporary = 0;
  if (score[active] >= 50) {
    alert("WINNER");
  }
  changePlayer();
}

//   option.querySelectorAll("li").forEach((element) => {
//    element.addEventListener("click", () => {
//      if (option.querySelector(".Mariami")) {
//        const includes = option.querySelector(".Mariami");
//        includes.classList.remove("Mariami");
//      }
//      element.classList.add("Mariami");
//           console.log(option);
//    });
// });
