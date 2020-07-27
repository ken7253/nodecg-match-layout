'use strict';
const blueTeam = document.getElementById("blueTeam");
const redTeam = document.getElementById("redTeam");
const teamsRep = nodecg.Replicant("teams", {
	defaultValue: { redTeam: "RedTeam", blueTeam: "blueTeam" },
});

teamsRep.on('change', newValue => {
    blueTeam.innerHTML = "<span>" + newValue.buleTeam + "</span>";
    redTeam.innerHTML = "<span>" + newValue.redTeam + "</span>";
    console.log(newValue)
});
