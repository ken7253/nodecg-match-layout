'use strict';
// DOM
const teamAlfa = document.getElementById('teamAlfaName');
const teamBravo = document.getElementById('teamBravoName');
// Replicant
const teamsRep = nodecg.Replicant('teams', {
	defaultValue: ['teamAlfa', 'teamBravo']
});
// Function
teamsRep.on('change', newValue => {
	teamAlfa.innerText = newValue[0];
	teamBravo.innerText = newValue[1];
});
