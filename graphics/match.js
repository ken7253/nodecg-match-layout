'use strict';
const blueTeamValue = document.getElementById("blueTeamValue");
const redTeamValue = document.getElementById("redTeamValue");
const teamsRep = nodecg.Replicant('teams', {
	defaultValue: ['defaultTeam-A', 'defaultTeam-B'],
});

teamsRep.on('change', newValue => {
	blueTeamValue.innerText = newValue[0];
	redTeamValue.innerText = newValue[1];
});
