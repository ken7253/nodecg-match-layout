'use strict';
const blueTeam = document.getElementById("blueTeam");
const redTeam = document.getElementById("redTeam");
const teamsRep = nodecg.Replicant("teams", {
	defaultValue: ["RedTeam","blueTeam"],
});

teamsRep.on('change', newValue => {
    blueTeam.innerHTML = "<span>" + newValue[0] + "</span>";
    redTeam.innerHTML = "<span>" + newValue[1] + "</span>";
    console.log(newValue)
});
