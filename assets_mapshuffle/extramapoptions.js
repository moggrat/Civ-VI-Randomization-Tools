//https://civilization.fandom.com/wiki/Starting_a_new_game_(Civ6)
const resourcesa =["Sparse","Standard","Abundant","Random",];
const worldagea =["New","Standard","Old","Random"];
const startposa=["Balanced","Standard","Legendary"];
const temperaturea =["Hot","Standard","Cold","Random"];
const rainfalla =["Arid","Standard","Wet","Random"];
const sealevela =["Low","Standard","High","Random"];
//var Nat Wonders =[];

function resourcesFunc() 
{
	let resourcesrng = resourcesa[Math.floor(Math.random() * resourcesa.length)];
	document.getElementById("resourcesp").innerHTML = "<button onclick='resourcesFunc()'>!</button><b>Resources: </b>"+resourcesrng;
}
function worldageFunc() 
{
	let worldagesrng = worldagea[Math.floor(Math.random() * worldagea.length)];
	document.getElementById("worldagep").innerHTML ="<button onclick='worldageFunc()'>!</button><b>World Age: </b>" + worldagesrng;
}
function startposFunc() 
{
	let startpossrng = startposa[Math.floor(Math.random() * startposa.length)];
	document.getElementById("startposp").innerHTML ="<button onclick='startposFunc()'>!</button><b>Start Position: </b>"+ startpossrng;
}
function temperatureFunc() 
{
	let temperaturerng = temperaturea[Math.floor(Math.random() * temperaturea.length)];
	document.getElementById("temperaturep").innerHTML ="<button onclick='temperatureFunc()'>!</button><b>Temperature: </b>"+  temperaturerng;
}
function rainfallFunc() 
{
	let rainfallrng = rainfalla[Math.floor(Math.random() * rainfalla.length)];
	document.getElementById("rainfallp").innerHTML ="<button onclick='rainfallFunc()'>!</button><b>Rainfall: </b>"+  rainfallrng;
}
function sealevelFunc() 
{
	let sealevelrng = sealevela[Math.floor(Math.random() * sealevela.length)];
	document.getElementById("sealevelp").innerHTML = "<button onclick='sealevelFunc()'>!</button><b>Sea Level: </b>"+ sealevelrng;
}
function runallextramapFunc() 
{
	resourcesFunc(); 
	worldageFunc() ;
	startposFunc() ;
	temperatureFunc() ;
	rainfallFunc() ;
	sealevelFunc();
}