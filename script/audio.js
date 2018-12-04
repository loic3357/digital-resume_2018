var audio_etoile = new Audio('audio/etoile.mp3');
var audio_champignon = new Audio('audio/champignon.mp3');
var audio_piece = new Audio ('audio/piece.mp3');

var play = document.getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[1].onclick = function() {
    audio_etoile.play();
};

var play = document.getElementsByTagName("section")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[1].onclick = function() {
    audio_champignon.play();
};

var play = document.getElementsByTagName("section")[0].getElementsByTagName("div")[2].getElementsByTagName("img")[1].onclick = function() {
    audio_piece.play();
};