let optionBtn = document.querySelectorAll(".options button");
let userChoice;
let compChoice;
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let userResult = document.querySelector("#user-result");
let compResult = document.querySelector("#comp-result");
let result = document.querySelector("#result");
let chocies = ["Stone", "Paper", "Scissor"];
let showChoices = () => {
  userResult.textContent = userChoice;
  compResult.textContent = compChoice;
};
let updateScore = () => {
  if (userChoice === "stone" && compChoice === "scissor") {
    userScore.textContent = Number(userScore.textContent) + 1;
  } else if (userChoice === "paper" && compChoice === "stone") {
    userScore.textContent = Number(userScore.textContent) + 1;
  } else if (userChoice === "scissor" && compChoice === "paper") {
    userScore.textContent = Number(userScore.textContent) + 1;
  } else if (userChoice === compChoice) {
    return "";
  } else {
    compScore.textContent = Number(compScore.textContent) + 1;
  }
};
optionBtn.forEach((el) => {
  el.addEventListener("click", () => {
    userChoice = el.textContent.trim().toLowerCase();
    compChoice =
      chocies[Math.floor(Math.random() * chocies.length)].toLowerCase();
    showChoices();
    updateScore();
  });
});
result.addEventListener("click", () => {
  if (userScore.textContent > compScore.textContent) {
    document.querySelector("#show-result").textContent = "You Win!!";
  } else if (compScore.textContent > userScore.textContent) {
    document.querySelector("#show-result").textContent = "You loss!!";
  } else {
    document.querySelector("#show-result").textContent = "DRAW!!";
  }
});
let restAll = document.querySelector("#reset");
restAll.addEventListener("click", () => {
  userScore.textContent = 0;
  compScore.textContent = 0;
  userResult.textContent = "user choice";
  compResult.textContent = "comp choice";
});
