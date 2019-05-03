var frases = [
    "May the Force be with you.",
    "Adventure. Excitement. A Jedi craves not these things.",
    "Always pass on what you have learned.",
    "A Jedi uses the Force for knowledge and defense, never for attack.",
    "In a dark place we find ourselves, and a little more knowledge lights our way.",
    "Powerful you have become, the dark side I sense in you.",
    "When nine hundred years old you reach, look as good you will not.",
    "Many of the truths that we cling to depend on our point of view.",
    "Patience you must have my young Padawan.",
    "Feel the Force.",
    "The dark side clouds everything. Impossible to see the future is.",
    "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Attachment leads to jealousy, the shadow of greed that is.",
    "Train yourself to let go of everything you fear to lose.",
    "Truly wonderful, the mind of a child is.",
    "Size matters not. Look at me. Judge me by my size, do you?",
    "Luminous beings are we. Not this crude matter.",
    "Wars not make one great.",
    "Do. Or do not. There is no try.",
];

function fraseDaSorte() {
    var random = Math.floor(Math.random() * 19);
    document.getElementById("paragrafo").innerHTML = frases[random];
}