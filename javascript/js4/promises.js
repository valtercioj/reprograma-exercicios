//exercicio 1

const candidato = (experiencia) => {
	return new Promise((resolve, reject) => { 
        // o new é um instanciamento
        // a Promise tem que retornar alguma coisa
        
        setTimeout(() => {
            experiencia > 5 ? resolve('Contratado como sênior') : reject('Contratado como júnior') 
            
            //resolve é o acerto, cai no then (pode ser qualquer palavra no lugar de resolve e reject, o que importa é a posição
            
            //reject é o erro, cai no catch
        }, 2000)
    }) 
}

const vaga = (experiencia) => {
    candidato(experiencia)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

//exercicio 2

const numParImpar = data => data%2 != 0 ? setTimeout(() => {console.log('ímpar')}, 1000) : setTimeout(() => {console.log('par')}, 2000) //quando resolve a function em uma linha não precisa da chave

const numPromise = data => {
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject('deu ruim')
        } else {
            resolve(numParImpar(data))
        }
    })
}

const returnPromise = data => {
    numPromise(data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// ou

const numParImpar = data => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)){
            reject(console.log('deu ruim'))
        }
        else if (data%2 != 0) {
            setTimeout(() => {
                resolve(console.log('ímpar'))
            }, 1000)
        }
        else {
            setTimeout(() => {
                reject(console.log('par'))
            }, 2000)
        } 
    })
}

const returnParImpar = data => {
    numParImpar(data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}