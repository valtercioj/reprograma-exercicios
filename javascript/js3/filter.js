var alunas = [
    { nome: "Nina", idade: 29, materia_preferida: "jQuery" },
    { nome: "Rafa", idade: 22, materia_preferida: "CSS" },
    { nome: "Raissa", idade: 28, materia_preferida: "JavaScript" },
    { nome: "Miga", idade: 24, materia_preferida: "Sass" }
];

var arrayIdade = (data) => {
    return data.map((item) => {
        return item.idade
    });
}

document.body.innerHTML = arrayIdade(alunas);

var arrayAlunas = (data) => {
    return data.map((item) => {
        return `<br>${item.nome}, ${item.idade}, ${item.materia_preferida}`
    }).join('');
}

var filtroIdade = alunas.filter ((item) => {
    return item.idade < 25
});

console.log(filtroIdade);

document.body.innerHTML += arrayAlunas(filtroIdade);

// var arrayIdade = alunas.map((item) => {
//     return item.idade
// })

// var filtroIdade = alunas.filter((item) => {
//     return item.idade < 25
// })

// console.log(arrayIdade);
// console.log(filtroIdade);


