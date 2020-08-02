'use strict';
const acceptTeams = document.getElementById('acceptTeams');
const switchTeams = document.getElementById('switchTeams');
const teamsRep = nodecg.Replicant('teams');

acceptTeams.addEventListener('click', () => {
	let firstAttackTeam = document.getElementById('firstAttack').value;
	let secondAttackTeam = document.getElementById('secondAttack').value;
	teamsRep.value = [firstAttackTeam, secondAttackTeam];
	console.log(teamsRep);
});

switchTeams.addEventListener('click', () => {
	teamsRep.value.reverse();
	console.log(teamsRep);
});
