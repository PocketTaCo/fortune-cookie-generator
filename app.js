var Fate = document.getElementById("fortune-cookie-text");
//document.getElementById("fortune-cookie-text").innerHTML = generateFortuneCookie + f.innerHTML

var FortuneList = ["You shall have the talent of doing absolutely nothing. ", 
						"Time shall stop in your vision at will. ", 
						"Gather the strength of all the omnipotent beings. ", 
						"gain nothing... thats it. ", "Love? nah you get none m8 outta here! ", "YOU'LL DIE FROM EPLIEPSY!!!!"]

var PreviousFortune = []

var prev = document.createElement("LI")
document.getElementById("previous-fortunes").appendChild(prev)

function generateFortuneCookie (){
	var randomFortune = Math.floor(Math.random() * Math.floor(FortuneList.length))
		

		Fate.innerHTML = FortuneList [randomFortune]

	


	PreviousFortune.push(FortuneList[randomFortune])	
	console.log(PreviousFortune)

		if PreviousFortune  !== 1
			

			
		PreviousFortune.push(Fate.innerHTML)
}

	