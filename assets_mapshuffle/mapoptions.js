//Map Types
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
//Map sizes
const mapsizearray = [
	"Duel",
	"Tiny",
	"Small",
	"Standard",
	"Large",
	"Huge"
	];
// game speeds
const gamespeedsarray = [
	"Marathon",
	"Epic",
	"Standard",
	"Quick",
	"Online"
	];
//game start era
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
	//a random map from map type is chosen
	let maprng = mapsarray[Math.floor(Math.random() * mapsarray.length)];
	document.getElementById("mapp").innerHTML = "<button onclick='mapshuffleFunc()'>!</button><b>Map: </b>" + maprng;
}	

function sizeshuffleFunc() 
{	
	//map size is randomly chosen 
	let sizrng = mapsizearray[Math.floor(Math.random() * mapsizearray.length)];
	
	//variables for players(random number) and city states(random number) 
	let playersrn;
	let cstate;
	
	//depending on the size of the map choose a random number of civs and city states
	//random is *x players starting from +y
	//eg Math.random() * 3) + 2 can have numbers 2 3 4
	switch(sizrng) 
	{
		case "Duel":
			playersrn = Math.floor(Math.random() * 3) + 2 //2-4 players
			break;
		case "Tiny":
			playersrn = Math.floor(Math.random() * 3) + 4 //4-6 players
			break;
		case "Small":
			playersrn = Math.floor(Math.random() * 5) + 6 //6-10
			break;
		case "Standard":
			playersrn = Math.floor(Math.random() * 7) + 8 //8-14
			break;
		case "Large":
			playersrn = Math.floor(Math.random() * 7) + 10 //10-16
			break;
		case "Huge":
			playersrn = Math.floor(Math.random() * 9) + 12 //12-24
			break;
		default:
			playersrn = "Error"
		} 
		switch(sizrng) 
		{
			case "Duel":
				cstate = Math.floor(Math.random() * 4) + 3 //3-6
				break;
			case "Tiny":
				cstate = Math.floor(Math.random() * 5) + 6 //6-10
				break;
			case "Small":
				cstate = Math.floor(Math.random() * 6) + 9 //9-14
				break;
			case "Standard":
				cstate = Math.floor(Math.random() * 7) + 12 //12-18
				break;
			case "Large":
				cstate = Math.floor(Math.random() * 8) + 15 //15-22
				break;
			case "Huge":
				cstate = Math.floor(Math.random() * 7) + 18 //18-24
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
	
	//variables that store 0,1 binary values to determine if each mode is used
	//this code has room for improvement (such as a constant array of modes)
	let ra = Math.floor(Math.random() * 2); //apocalypse mode
	let rss = Math.floor(Math.random() * 2); //secret societies mode
	let rtcs = Math.floor(Math.random() * 2); //tech and civic shuffle mode
	let rda = Math.floor(Math.random() * 2); //dramatic ages mode
	
	
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
	//run all functions needed for successful map generation
	mapshuffleFunc();
	sizeshuffleFunc();
	gamespeedFunc();
	gamemodeFunc();
	disasterFunc();
	starteraFunc();
}
	