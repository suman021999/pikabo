


const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];

const gameDiv = document.querySelector("#game");
const choice_btns = document.querySelectorAll("#isac");
const resultDivs = document.querySelectorAll("#results");
const resultDi = document.querySelector(".mresult");
const winner = document.querySelector(".winner");
const rtext = document.querySelector("#rtext");
const plaAgain = document.querySelector("#playbtn");
const Next = document.querySelector(".next");
const Olg = document.querySelector("#olg");
// const MyScoreElement = document.querySelector("#myscore");
// const compScoreElement = document.querySelector("#computerscore");

choice_btns.forEach((el) => {
  el.addEventListener("click", () => {
    const choiceName = el.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

const choose = (choice) => {
  const aiChoice = aiChoose();
  displayResults([choice, aiChoice]);
  displayWinner([choice, aiChoice]);
};

const aiChoose = () => {
  const randomNum = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomNum];
};

const displayResults = (results) => {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
          <div id="isac" class='choice ${results[idx].name}'>
            <img src="public/${results[idx].name}.png" alt="${results[idx].name}" />
          </div>
        `;
    }, idx * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultDi.classList.toggle("hidden");
};

// game

const displayWinner = (results) => {
  setTimeout(() => {
    const userwins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userwins) {
      rtext.innerText = "win";
      resultDivs[0].classList.toggle("winner");
      Next.classList.toggle("hidden");
      keepScore(1);
    } else if (aiWins) {
      rtext.innerText = "lost";
      resultDivs[1].classList.toggle("winner");
      keepScore(-1);
    } else {
      rtext.innerText = "draw";
      keepScore(0);
    }

    winner.classList.toggle("hidden");
  }, 1000);
};

const isWinner = (results) => {
  return results[0].beats === results[1].name;
};

const MyScoreElement = document.querySelector("#myscore");
const compScoreElement = document.querySelector("#computerscore");

let myScore = 0;
let computerScore = 0;

// //scoring
function keepScore(point) {
  if (point == 1) {
    myScore += 1;
    MyScoreElement.innerText = myScore;
  } else if (point == -1) {
    computerScore += 1;
    compScoreElement.innerText = computerScore;
  } else if (point == 0) {
    myScore += 1;
    MyScoreElement.innerText = myScore;
    computerScore += 1;
    compScoreElement.innerText = computerScore;
  }
}

// play again

plaAgain.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultDi.classList.toggle("hidden");
  Next.classList.add("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  rtext.innerText = "";
  winner.classList.toggle("hidden");
});

// dom
let open = document.querySelector("#open");
let close = document.querySelector("#close");
let model = document.querySelector("#model");

// Show/Hide Rules

open.addEventListener("click", function () {
  model.classList.remove("hidden");
});

close.addEventListener("click", function () {
  model.classList.add("hidden");
});
