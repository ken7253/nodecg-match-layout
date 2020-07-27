"use strict";
const acceptTeams = document.getElementById("acceptTeams");
const switchTeams = document.getElementById("switchTeams");
const teamsReplicant = nodecg.Replicant("teams");

acceptTeams.addEventListener("click", () => {
	let firstAttackTeam = document.getElementById("firstAttack").value;
	let secondAttackTeam = document.getElementById("secondAttack").value;
	teamsReplicant.value = {
		redTeam: firstAttackTeam,
		buleTeam: secondAttackTeam,
	};
});
