'use strict';
const acceptTeams = document.getElementById('acceptTeams');
const switchTeams = document.getElementById('switchTeams');
const roundFirstTeam = document.getElementById('roundFirstTeam');
const roundSecondTeam = document.getElementById('roundSecondTeam');
const teamsRep = nodecg.Replicant('teams');

acceptTeams.addEventListener('click', () => {
	const firstAttackTeam = document.getElementById('firstAttack').value;
	const secondAttackTeam = document.getElementById('secondAttack').value;
	teamsRep.value = [firstAttackTeam, secondAttackTeam];
	roundFirstTeam.innerText = teamsRep.value[0];
	roundSecondTeam.innerText = teamsRep.value[1];
});

switchTeams.addEventListener('click', () => {
	teamsRep.value.reverse();
});
