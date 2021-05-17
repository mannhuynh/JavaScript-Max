const startGameBtn = document.getElementById("start-game-btn");

const R = "ROCK";
const P = "PAPER";
const S = "SCISSORS";
const DEFAULT_USER_CHOICE = R;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
	const selection = prompt(
		`Use R, P, or S for ${R}, ${P}, or ${S}?`,
		""
	).toUpperCase();
	if (selection !== 'R' && selection !== 'P' && selection !== 'S') {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
};

const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return R;
	} else if (randomValue < 0.67) {
		return P;
	} else {
		return S;
	}
};

const getWinner = function (cChoice, pChoice) {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === R && pChoice === P) ||
		(cChoice === P && pChoice === S) ||
		(cChoice === S && pChoice === R)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log("Game is starting...");
	const playerSelection = getPlayerChoice();
	console.log(`Player's Choice: ${playerSelection}`);
	const computerChoice = getComputerChoice();
  console.log( `Computer's Choice: ${computerChoice}`);
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
});
