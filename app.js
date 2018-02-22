var f = document.getElementById("fortune-cookie-text");
//document.getElementById("fortune-cookie-text").innerHTML = generateFortuneCookie + f.innerHTML

var FortuneList = ["You shall have the talent of doing absolutely nothing. ", 
						"Time shall stop in your vision at will. ", 
						"Gather the strength of all the omnipotent beings. ", 
						"gain nothing... thats it. ", "Love? nah you get none m8 outta here! "]


function generateFortuneCookie (){
	var randomFortune = Math.floor(Math.random() * Math.floor(FortuneList.length))
		

		f.innerHTML = FortuneList [randomFortune]
}

