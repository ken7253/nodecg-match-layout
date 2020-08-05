'use strict';
// DOM
const acceptTeams = document.getElementById('acceptTeams');
const switchTeams = document.getElementById('switchTeams');
const roundCountAlfa = document.getElementById('roundAlfa').value;
const roundCountBravo = document.getElementById('roundBravo').value;
const performanceMode = document.getElementById('performanceCheckbox');

// Replicant
const teamsRep = nodecg.Replicant('teams');

// Function
function isPerformanceMode() {
	return performanceMode.checked;
}

// EventListener
acceptTeams.addEventListener('click', () => {
	if (isPerformanceMode()) {
		alert('本番中に変更ができない項目です');
	} else {
		const teamAlfa = document.getElementById('teamAlfa').value;
		const teamBravo = document.getElementById('teamBravo').value;
		teamsRep.value = [teamAlfa, teamBravo];
	}
});

switchTeams.addEventListener('click', () => {
	teamsRep.value.reverse();
});
// ラウンド設定追加する。
