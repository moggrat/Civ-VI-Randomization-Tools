const mapsarray = [
	"Continents",
	"Fractral",
	"Inland Sea",
	"Island Plates",
	"Pangaea",
	"Shuffle",
	"4-Leaf Clover",
	"6-Armed Snowflake",
	"Earth",
	"True Start Location Earth",
	"Seven Seas",
	"Small Continents",
	"East Asia",
	"True Start Location East Asia",
	"Archipelago",
	"Europe",
	"True Start Location Europe",
	"Continents and Islands",
	"Lakes",
	"Mirror",
	"Primordial",
	"Splintered Fractal",
	"Terra",
	"Tilted Axis",
	"Highlands"
	];
const mapsizearray = [
	"Duel",
	"Tiny",
	"Small",
	"Standard",
	"Large",
	"Huge"
	];
const gamespeedsarray = [
	"Marathon",
	"Epic",
	"Standard",
	"Quick",
	"Online"
	];
const gamestarteras = [ //cant start in "Future Era"
	"Ancient Era",
	"Classical Era",
	"Medieval Era",
	"Renaissance Era",
	"Industrial Era",
	"Modern Era",
	"Atomic Era",
	"Information Era" 
	]; 


function mapshuffleFunc() 
{
	let maprng = mapsarray[Math.floor(Math.random() * mapsarray.length)];
	document.getElementById("mapp").innerHTML = "<button onclick='mapshuffleFunc()'>!</button><b>Map: </b>" + maprng;
}	

function sizeshuffleFunc() 
{	
	let sizrng = mapsizearray[Math.floor(Math.random() * mapsizearray.length)];
	let playersrn;
	let cstate;
	switch(sizrng) 
	{
		case "Duel":
			playersrn = Math.floor(Math.random() * 3) + 2
			break;
		case "Tiny":
			playersrn = Math.floor(Math.random() * 3) + 4
			break;
		case "Small":
			playersrn = Math.floor(Math.random() * 5) + 6
			break;
		case "Standard":
			playersrn = Math.floor(Math.random() * 7) + 8
			break;
		case "Large":
			playersrn = Math.floor(Math.random() * 7) + 10
			break;
		case "Huge":
			playersrn = Math.floor(Math.random() * 9) + 12
			break;
		default:
			playersrn = "Error"
		} 
		switch(sizrng) 
		{
			case "Duel":
				cstate = Math.floor(Math.random() * 4) + 3
				break;
			case "Tiny":
				cstate = Math.floor(Math.random() * 5) + 6
				break;
			case "Small":
				cstate = Math.floor(Math.random() * 6) + 9
				break;
			case "Standard":
				cstate = Math.floor(Math.random() * 7) + 12
				break;
			case "Large":
				cstate = Math.floor(Math.random() * 8) + 15
				break;
			case "Huge":
				cstate = Math.floor(Math.random() * 7) + 18
				break;
			default:
				playersrn = "Error"
		} 
		document.getElementById("sizep").innerHTML = "<button onclick='sizeshuffleFunc()'>!</button><b>Size and Civs: </b>" + sizrng + " Map, " + playersrn + " Civs, " + cstate + " City-States";

	}

function gamespeedFunc()
{
	let gspeeda = gamespeedsarray[Math.floor(Math.random() * gamespeedsarray.length)];
	document.getElementById("gspeedp").innerHTML = "<button onclick='gamespeedFunc()'>!</button><b>Game Speed: </b>" + gspeeda;
}

function gamemodeFunc()
{
	let rngmodes = "";
	let ra = Math.floor(Math.random() * 2);
	let rss = Math.floor(Math.random() * 2);
	let rtcs = Math.floor(Math.random() * 2);
	let rda = Math.floor(Math.random() * 2);
	if (ra > 0) rngmodes = "Apocalypse, ";
	if (rss > 0) rngmodes += "Secret Societies, ";
	if (rtcs > 0) rngmodes +=  "Tech and Civic Shuffle, ";
	if (rda > 0) rngmodes +=  "Dramatic Ages";
	document.getElementById("gmodep").innerHTML = "<button onclick='gamemodeFunc()'>!</button><b>Game Modes: </b>" + rngmodes;	
}
function disasterFunc()
{
	let distIntensity = Math.floor(Math.random() * 5);
	document.getElementById("distip").innerHTML = "<button onclick='disasterFunc()'>!</button><b>Disaster Intensity 0-4(Default 2): </b>" + distIntensity;	

}
function starteraFunc()
{
	let sera = gamestarteras[Math.floor(Math.random() * gamestarteras.length)];
	document.getElementById("serap").innerHTML ="<button onclick='starteraFunc()'>!</button><b>Start era: </b>" + sera;	

}
function runallmapFuncs()
{
	mapshuffleFunc();
	sizeshuffleFunc();
	gamespeedFunc();
	gamemodeFunc();
	disasterFunc();
	starteraFunc();
}
	