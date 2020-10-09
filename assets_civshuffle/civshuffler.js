
let na = [];
let sa = [];
let eur = [];
let afr = [];
let asia = [];
let oce = [];

loadCivs();

function loadCivs()
{
	for (let i = 0; i < myObj.civs.length; i++) {
		var objCiv = myObj.civs[i];
		switch(objCiv.continent)
		{
			case "NA":
				na.push(objCiv.civ);
				break;
			case "SA":
				sa.push(objCiv.civ);
				break;
			case "EUR":
				eur.push(objCiv.civ);
				break;
			case "AFR":
				afr.push(objCiv.civ);
				break;
			case "ASIA":
				asia.push(objCiv.civ);
				break;
			case "OCE":
				oce.push(objCiv.civ);
				break;
			default:
				var xran = Math.floor(Math.random() * 2);
				if (objCiv.continent == "EURASIA" && xran == 0)
				{
					eur.push(objCiv.civ);
				}
				else if (objCiv.continent == "EURASIA" && xran == 1)
				{
					asia.push(objCiv.civ);
				}
		}
	}


	document.getElementById("naNum").max = na.length;
	document.getElementById("saNum").max = sa.length;
	document.getElementById("eurNum").max = eur.length;
	document.getElementById("afrNum").max = afr.length;
	document.getElementById("asiaNum").max = asia.length;
	document.getElementById("oceNum").max = oce.length;
}

function createRdmCivs() 
{
	na = [];
	sa = [];
	eur = [];
	afr = [];
	asia = [];
	oce = [];
	loadCivs();
	checkMaxMinValues();
	
	document.getElementById("na").innerHTML = "";
	let civfromna = [];
	let inputValNa = Number(document.getElementById("naNum").value);
	for(i=0; i<=(inputValNa-1); i++){
		civfromna.push(na[Math.floor(Math.random() * na.length)]);
		na.splice(na.indexOf(civfromna[i]), 1);
		
		let napara = document.createElement("p");
		napara.innerHTML  = civfromna[i];
		document.getElementById("na").appendChild(napara);;
	}

	document.getElementById("sa").innerHTML = "";
	let civfromsa = [];
	let inputValSa = Number(document.getElementById("saNum").value);
	for(i=0; i<=(inputValSa-1); i++){
		civfromsa.push(sa[Math.floor(Math.random() * sa.length)]);
		sa.splice(sa.indexOf(civfromsa[i]), 1);
		
		let sapara = document.createElement("p");
		sapara.innerHTML  = civfromsa[i];
		document.getElementById("sa").appendChild(sapara);;	}

	document.getElementById("eur").innerHTML = "";
	let civfromeur = [];
	let inputValEur = Number(document.getElementById("eurNum").value);
	for(i=0; i<=(inputValEur-1); i++){
		civfromeur.push(eur[Math.floor(Math.random() * eur.length)]);
		eur.splice(eur.indexOf(civfromeur[i]), 1);
						
		let eurpara = document.createElement("p");
		eurpara.innerHTML  = civfromeur[i];
		document.getElementById("eur").appendChild(eurpara);;
	}

	document.getElementById("afr").innerHTML = "";
	let civfromafr = [];
	let inputValAfr = Number(document.getElementById("afrNum").value);
	for(i=0; i<=(inputValAfr-1); i++){
		civfromafr.push(afr[Math.floor(Math.random() * afr.length)]);
		afr.splice(afr.indexOf(civfromafr[i]), 1);

		let afrpara = document.createElement("p");
		afrpara.innerHTML  = civfromafr[i];
		document.getElementById("afr").appendChild(afrpara);;
	}
	document.getElementById("asia").innerHTML = "";
	let civfromasia = [];
	let inputValAsia = Number(document.getElementById("asiaNum").value);
	for(i=0; i<=(inputValAsia-1); i++){
		civfromasia.push(asia[Math.floor(Math.random() * asia.length)]);
		asia.splice(asia.indexOf(civfromasia[i]), 1);
	
		let asiapara = document.createElement("p");
		asiapara.innerHTML  = civfromasia[i];
		document.getElementById("asia").appendChild(asiapara);;
	}
	document.getElementById("oce").innerHTML = "";
	let civfromoce = [];
	let inputValOce = Number(document.getElementById("oceNum").value);
	for(i=0; i<=(inputValOce-1); i++){
		civfromoce.push(oce[Math.floor(Math.random() * oce.length)]);
		oce.splice(oce.indexOf(civfromoce[i]), 1);

		let ocepara = document.createElement("p");
		ocepara.innerHTML  = civfromoce[i];
		document.getElementById("oce").appendChild(ocepara);;
	}

}
function checkMaxMinValues()
{
	if (Number(document.getElementById("naNum").value) > Number(document.getElementById("naNum").max))
	{
		document.getElementById("naNum").value = Number(document.getElementById("naNum").max);
	}
	if (Number(document.getElementById("naNum").value) < Number(document.getElementById("naNum").min))
	{
		document.getElementById("naNum").value = Number(document.getElementById("naNum").min);
	}	
	if (Number(document.getElementById("saNum").value) > Number(document.getElementById("saNum").max))
	{
		document.getElementById("saNum").value = Number(document.getElementById("saNum").max);
	}
	if (Number(document.getElementById("saNum").value) < Number(document.getElementById("saNum").min))
	{
		document.getElementById("saNum").value = Number(document.getElementById("saNum").min);
	}	
	if (Number(document.getElementById("eurNum").value) > Number(document.getElementById("eurNum").max))
	{
		document.getElementById("eurNum").value = Number(document.getElementById("eurNum").max);
	}
	if (Number(document.getElementById("eurNum").value) < Number(document.getElementById("eurNum").min))
	{
		document.getElementById("eurNum").value = Number(document.getElementById("eurNum").min);
	}	
	if (Number(document.getElementById("afrNum").value) > Number(document.getElementById("afrNum").max))
	{
		document.getElementById("afrNum").value = Number(document.getElementById("afrNum").max);
	}
	if (Number(document.getElementById("afrNum").value) < Number(document.getElementById("afrNum").min))
	{
		document.getElementById("afrNum").value = Number(document.getElementById("afrNum").min);
	}		
	if (Number(document.getElementById("asiaNum").value) > Number(document.getElementById("asiaNum").max))
	{
		document.getElementById("asiaNum").value = Number(document.getElementById("asiaNum").max);
	}
	if (Number(document.getElementById("asiaNum").value) < Number(document.getElementById("asiaNum").min))
	{
		document.getElementById("asiaNum").value = Number(document.getElementById("asiaNum").min);
	}	
	if (Number(document.getElementById("oceNum").value) > Number(document.getElementById("oceNum").max))
	{
		document.getElementById("oceNum").value = Number(document.getElementById("oceNum").max);
	}
	if (Number(document.getElementById("oceNum").value) < Number(document.getElementById("oceNum").min))
	{
		document.getElementById("oceNum").value = Number(document.getElementById("oceNum").min);
	}
}