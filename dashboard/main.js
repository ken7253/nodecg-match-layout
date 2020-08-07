'use strict';
// DOM
const acceptTeams = document.getElementById('acceptTeams');
const switchTeams = document.getElementById('switchTeams');
const acceptRounds = document.getElementById('acceptRound');
const resetRounds = document.getElementById('resetRound');
const roundLimit = document.getElementById('roundLimit');
const performanceMode = document.getElementById('performanceCheckbox');
const PERFORMANCE_MODE_ERR = "本番中に変更できない項目です\n変更する場合は本番モードを解除してください。";

// Replicant
const teamsRep = nodecg.Replicant('teams');

// Function
function isPerformanceMode() {
	return performanceMode.checked;
};

function createRoundDOM(round) {
	// need refactoring this function :)
	const tagetAlfa = document.getElementById('roundAlfa');
	const tagetBravo = document.getElementById('roundBravo')
	tagetAlfa.textContent = null;
	tagetBravo.textContent = null;
	for (let i = 0; i < round; i++) {
		const optionEl = document.createElement('option');
		const textContent = document.createTextNode(i);
		optionEl.setAttribute('value', i);
		optionEl.appendChild(textContent);
		tagetAlfa.appendChild(optionEl);
		// add one loop 
	};
	for (let i = 0; i < round; i++) {
		const optionEl = document.createElement('option');
		const textContent = document.createTextNode(i);
		optionEl.setAttribute('value', i);
		optionEl.appendChild(textContent);
		tagetBravo.appendChild(optionEl);
	};
};

// EventListener
// TeamSetting
acceptTeams.addEventListener('click', () => {
	if (isPerformanceMode()) {
		alert(PERFORMANCE_MODE_ERR);
	} else {
		const teamAlfa = document.getElementById('teamAlfa').value;
		const teamBravo = document.getElementById('teamBravo').value;
		teamsRep.value = [teamAlfa, teamBravo];
	}
});

switchTeams.addEventListener('click', () => {
	teamsRep.value.reverse();
});

// RoundSetting
roundLimit.addEventListener('change', () => {
	if(isPerformanceMode()) {
		alert(PERFORMANCE_MODE_ERR);
	} else {
		createRoundDOM(roundLimit.value);
	};
});

acceptRounds.addEventListener('click', () => {
	const roundCountAlfa = document.getElementById('roundAlfa').value;
	const roundCountBravo = document.getElementById('roundBravo').value;
	console.log('Alfa:',roundCountAlfa,'Bravo:',roundCountBravo)
	// input data => graphics

});