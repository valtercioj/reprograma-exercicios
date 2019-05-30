// arrow function

// Converta as funções nos seguintes trechos de código em Arrow Functions:

// const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {
//   return item + 10;
// });
 
// // Dica: Utilize uma constante pra function

// const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//   return usuario.idade;
// }

// mostraIdade(usuario);

// // Dica: Utilize uma constante pra function

const usuario = {nome: 'Diego', idade: 23};
const mostraIdade = (usuario) => usuario.idade;

// const nome = "Diego";
// const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//   return { nome, idade };
// }

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome, idade) => `${nome}, ${idade}`;