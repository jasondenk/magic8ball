var phrases = ['You will eat well', 'Be cautious around lions', 'You will be rich', 'You will be poor','You will fly someday','Watch your step','Own your consciousness', 'Happy Day!'];

function generatePhrase() {
    var randomValue = Math.floor(phrases.length * Math.random());
    document.getElementById("eight").innerHTML= phrases[randomValue];
}



$(document).click(function () {
    $("#ball").effect("shake");
});





