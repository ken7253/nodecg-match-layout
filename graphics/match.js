'use strict';
// DOM
const teamAlfa = document.getElementById('teamAlfaName');
const teamBravo = document.getElementById('teamBravoName');


// Replicant
const teamsRep = nodecg.Replicant('teams', {
	defaultValue: ['teamAlfa', 'teamBravo']
});
const roundRep = nodecg.Replicant('round', {
	defaultValue: [0, [0, 0]]
});
// Monitoring replicants
teamsRep.on('change', newValue => {
	teamAlfa.innerText = newValue[0];
	teamBravo.innerText = newValue[1];
});

roundRep.on('change', newValue => {
	createRoundDOM(newValue[0]);
	changeRoundDOM(newValue[1][0], newValue[1][1]);
});

// Function
function createRoundDOM(round) {
	const alfaWinCounter = document.getElementById('alfaWinCounter');
	const bravoWinCounter = document.getElementById('bravoWinCounter');
	alfaWinCounter.textContent = null;
	bravoWinCounter.textContent = null;
	for (let i = 0; i < round; i++) {
		const counterEl = document.createElement('span');
		alfaWinCounter.appendChild(counterEl);
	};
	for (let i = 0; i < round; i++) {
		const counterEl = document.createElement('span');
		bravoWinCounter.appendChild(counterEl);
	};
};

function changeRoundDOM(alfaWin, bravoWin) {
	const alfaWinCounterChild = document.getElementById('alfaWinCounter').childNodes;
	const bravoWinCounterChild = document.getElementById('bravoWinCounter').childNodes;
	// Display
	// for (let i = 0; i < alfaWin; i++) {}
	console.log(alfaWin, bravoWin);
	console.log(alfaWinCounterChild, bravoWinCounterChild);
};

