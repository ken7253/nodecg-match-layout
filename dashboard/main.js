'use strict';
// DOM
const acceptTeams = document.getElementById('acceptTeams');
const switchTeams = document.getElementById('switchTeams');
const roundCountAlfa = document.getElementById('roundAlfa').value;
const roundCountBravo = document.getElementById('roundBravo').value;
// Replicant
const teamsRep = nodecg.Replicant('teams');

// function
acceptTeams.addEventListener('click', () => {
	const teamAlfa = document.getElementById('teamAlfa').value;
	const teamBravo = document.getElementById('teamBravo').value;
	teamsRep.value = [teamAlfa, teamBravo];
});

switchTeams.addEventListener('click', () => {
	teamsRep.value.reverse();
});
