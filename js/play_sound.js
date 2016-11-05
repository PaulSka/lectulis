function PlaySound(tts) {
	//Fonction pour dicter en TTS le texte passer en argument (tts)
    var tts_speaker = "French Female"
    responsiveVoice.speak(tts, tts_speaker, {onstart: StartCallback, onend: EndCallback});
};

function StartCallback() {
	//Callback avant le TTS
};

function EndCallback() {
    //Callback apres le TTS
};

function tts_all() {
	//Fonction permettant de separer chaque mot et appliquer la fonction tts
	//On recupere l'ID tts_this et on le split
	var words = $("#tts_this").html().split(" ");
	//Pour chaque element ...
	$.each(words, function(key, value) {
		//On formatte la valeur
		value = value.replace(/[\n\r]/g, '').replace('\t','').trim();
		//On ajoute les donnees
		//Verification
		if (value == "." || value == "!" || value == "," || value == "?") {
			$("#show_tts").append('<a class="btn btn-primary btn-large" href="#" role="button">' + value + '</a>');
		} else if (value.indexOf("<niv2>") >=0) {
			$("#show_tts").append('<a class="btn btn-niv2 btn-large" href="#" role="button" onclick="PlaySound(' + "'" + 
			value.replace("<niv2>", "").replace("</niv2>", "") + "'" + ')">' + value.replace("<niv2>", "").replace("</niv2>", "") + '</a>');
		} else if (value.indexOf("<niv3>") >=0) {
			$("#show_tts").append('<a class="btn btn-niv3 btn-large" href="#" role="button" onclick="PlaySound(' + "'" + 
			value.replace("<niv3>", "").replace("</niv3>", "") + "'" + ')">' + value.replace("<niv3>", "").replace("</niv3>", "") + '</a>');
		} else {
			$("#show_tts").append('<a class="btn btn-niv1 btn-large" href="#" role="button" onclick="PlaySound(' + "'" + 
			value + "'" + ')">' + value + '</a>');
		}
	});
};