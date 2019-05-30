// exercicio 3

function exibeHabilidades(){
    var usuarios = [
        {
          nome: 'Bruna',
          habilidades: ['Javascript', 'ReactJS', 'Redux']
        },
        {
          nome: 'Gabriela',
          habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ];

    for (elemento of usuarios){
        console.log(`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join(', ')}`);
    }
}

// ou

function exibeHabilidades(){
    var usuarios = [
        {
          nome: 'Bruna',
          habilidades: ['Javascript', 'ReactJS', 'Redux']
        },
        {
          nome: 'Gabriela',
          habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ];

    for (elemento of usuarios){
        console.log(`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.toString()}`);
    }
}

// ou

var usuarios = [
    {
      nome: 'Bruna',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriela',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];

function exibeHabilidades(usuarios){
    for (elemento of usuarios){
        console.log(`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join(', ')}`);
    }
}