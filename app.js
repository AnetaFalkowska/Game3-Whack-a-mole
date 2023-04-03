const scoreDisplay = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const cards = document.querySelectorAll(".card");
const startGameButton = document.querySelector("#start-game");
let score = 0;
let hitPosition;
let currentTime = 15;
let timerId = null;
let countDownTimerId = null;

startGameButton.addEventListener("click", () => {
  moveMole();
  countDownTimerId = setInterval(countDown, 1000);
});

const moleUp = () => {
  cards.forEach((card) => card.classList.remove("mole"));
  let randomNumber = Math.floor(Math.random() * 9);
  cards[randomNumber].classList.add("mole");
  hitPosition = cards[randomNumber].id;
};

cards.forEach((card) =>
  card.addEventListener("mousedown", () => {
    if (card.id == hitPosition) {
      score++;
      scoreDisplay.innerHTML = score;
      hitPosition = null;
    }
  })
);

const moveMole = () => {
  timerId = setInterval(moleUp, 1000);
};

const countDown = () => {
  currentTime--;
  timeLeft.innerHTML = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Time is over! Your final score is " + score);
  }
};
