var Fate = document.getElementById("fortune-cookie-text");
//document.getElementById("fortune-cookie-text").innerHTML = generateFortuneCookie + f.innerHTML

var FortuneList = ["You shall have the talent of doing absolutely nothing. ", 
						"Time shall stop in your vision at will. ", 
						"Gather the strength of all the omnipotent beings. ", 
						"gain nothing... thats it. ", "Love? nah you get none m8 outta here! ", "YOU'LL DIE FROM EPLIEPSY!!!!"]
var PreviousFortune = []

function generateFortuneCookie (){
	var randomFortune = Math.floor(Math.random() * Math.floor(FortuneList.length));
		
		Fate.innerHTML = FortuneList [randomFortune]

	PreviousFortune.push(FortuneList[randomFortune]);	
	console.log(PreviousFortune);
			
	var prev = document.createElement("LI");
	var TEXTME = document.createTextNode(FortuneList[randomFortune]);
	prev.appendChild(TEXTME);
		document.getElementById("previous-fortunes").appendChild(prev)

	FortuneList.splice(randomFortune, 1);
		while(FortuneList.length == 0){
			FortuneList.push("You shall have the talent of doing absolutely nothing. ", 
						"Time shall stop in your vision at will. ", 
						"Gather the strength of all the omnipotent beings. ", 
						"gain nothing... thats it. ", "Love? nah you get none m8 outta here! ", "YOU'LL DIE FROM EPLIEPSY!!!!")
		}
}



	