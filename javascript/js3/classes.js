// exercício 1
// Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
}

// Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha)
    }
}

// A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super). Deve ser criada uma propriedade interna this.admin = true em seu construtor.

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

// Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. (Realizando um if).

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        // this.admin == true ? console.log('O usuário é administrador') : console.log('O usuário não é administrador')
        // this.admin == true ? console.log(this.admin) : console.log(false)
        console.log(this.admin == true ? 'O usuário é administrador' : 'O usuário não é administrador')
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

