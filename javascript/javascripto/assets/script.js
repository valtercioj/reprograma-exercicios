var elogios = [
    "Zero defeitos",
    "Amorzinho",
    "Um neném",
    "Sexy",
    "Máquina de vencer",
    "Ícone incompreendido",
    "Intenso",
]

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}