'use strict';
// DOM
const teamAlfa = document.getElementById("blueTeamValue");
const teamBravo = document.getElementById("redTeamValue");
// Replicant
const teamsRep = nodecg.Replicant('teams', {
	defaultValue: ['teamAlfa', 'teamBravo'],
});
// function
teamsRep.on('change', newValue => {
	teamAlfa.innerText = newValue[0];
	teamBravo.innerText = newValue[1];
});
