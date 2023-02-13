//Selector
const versus = document.querySelector('.versus h1');
const resultPop = document.querySelector('.versus div div');
const resultText = document.querySelector('.versus h5');
const computerText = document.querySelectorAll('.hoverPoint.computerImage');
const playerText = document.querySelectorAll('.hoverPoint.playerImage');
const player = document.querySelectorAll('.gameImage .player');
const reset = document.querySelector('.refresh');


// Randomizer
function getCompChoice() {
	const comp = Math.random();
	if (comp < (1 / 3)) return 'rock';
	if (comp >= (1 / 3) && comp < (2 / 3)) return 'paper';
	return 'scissor';
}

// Win Draw Lose
let result = null;
function getResult(comp, player) {
	if (player == comp) return result = 'DRAW';
	if (player == 'rock') return (comp == 'scissor') ? result = 'PLAYER 1 WIN' : result = 'COMPUTER WIN';
	if (player == 'paper') return (comp == 'rock') ? result = 'PLAYER 1 WIN' : result = 'COMPUTER WIN';
	if (player == 'scissor') return (comp == 'paper') ? result = 'PLAYER 1 WIN' : result = 'COMPUTER WIN';
}


// computer function

function wait() {
	const start = new Date().getTime();
	let i = 0;

	setInterval(function () {
		if (new Date().getTime() - start >= 1000) {  // note to self dont add above 1000 unless you want the result function to be different 
			clearInterval;
			return;
		}

		computerText[i++].style.backgroundColor = '#c4c4c4';
		if (i == computerText.length) i = 0;

		resultPop.classList.remove('result');

		versus.style.color = '#ff0000';

	}, 50);

	setTimeout(function () {
		setInterval(function () {
			if (new Date().getTime() - start >= 1200) {
				clearInterval;
				return;
			}

			computerText[i++].style.backgroundColor = '#a07e4f'; //Selected Illusion
			if (i == computerText.length) i = 0;
		}, 50);
	}, 50);
}


// player function

player.forEach(function (choice) {
	choice.addEventListener('click', function () {
	
		for (let i = 0; i < playerText.length; i++) {
			playerText[i].style.backgroundColor = '#a07e4f';
		}

		if (result === null) {

			const compChoice = getCompChoice();

			const playerChoice = choice.className.substr(7, 7);

			result = getResult(compChoice, playerChoice);

			if (playerChoice == 'rock') {
				playerText[0].style.backgroundColor = '#c4c4c4';
			}
			else if (playerChoice == 'paper') {
				playerText[1].style.backgroundColor = '#c4c4c4';
			}
			else {
				playerText[2].style.backgroundColor = '#c4c4c4';
			}

			wait();

			setTimeout(function () {

				versus.style.color = '#a07e4f';

				resultPop.classList.add('result');

				resultText.innerHTML = result;
				if (result == "DRAW") {
					resultText.style.backgroundColor = '#225c0e';
				}
				else {
					resultText.style.backgroundColor = '#4c9654';
				}

				if (compChoice == 'rock') {
					computerText[0].style.backgroundColor = '#c4c4c4';
				}
				else if (compChoice == 'paper') {
					computerText[1].style.backgroundColor = '#c4c4c4';
				}
				else {
					computerText[2].style.backgroundColor = '#c4c4c4';
				}
			}, 1200);
		}
		else {
			alert('Silahkan tekan logo refresh terlebih dahulu!');
		}
	});
});

// reset function

reset.addEventListener('click', function () {

	resultText.innerHTML = '';

	resultPop.classList.remove('result');

	for (let i = 0; i < computerText.length; i++) {
		playerText[i].style.backgroundColor = '#a07e4f';
		computerText[i].style.backgroundColor = '#a07e4f';
	}

	versus.style.color = '#ff0000';

	result = null;
});