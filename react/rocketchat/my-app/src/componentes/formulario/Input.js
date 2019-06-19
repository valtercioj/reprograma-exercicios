import React from 'react';

export default function Input(props) {
  const { type, placeholder, id, value, name, required, onChange } = props //destructuring: criamos as constantes e declaramos que estão dentro do props, para chamar apenas 'type', 'placeholder' etc, sem repetir o 'props.'

  function validarInput(e) {
    const valor = e.target.value
    const nome = e.target.name

    if (required && valor.trim() === '') { //função trim remove os espaços da string
      onChange(nome, valor, 'Campo obrigatório')
      return
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (type === 'email' && !regex.test(valor)) {
      onChange(nome, valor, "Digite um e-mail válido")
      return
    }

    const regexCPF = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
    if (name === 'numCPF' && !regexCPF.test(valor)) {
      onChange(nome, valor, "Digite um CPF válido")
      return
    }

    const regexData = /((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/
    if (name === 'dataNasc' && !regexData.test(valor)) {
      onChange(nome, valor, "Digite uma data válida")
      return
    }

    const regexCEP = /[0-9]{5}-[0-9]{3}/
    if (name === 'numCEP' && !regexCEP.test(valor)) {
      onChange(nome, valor, "Digite um CEP válido")
      return
    }

    const regexCNPJ = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
    if (name === 'numCNPJ' && !regexCNPJ.test(valor)) {
      onChange(nome, valor, "Digite um CNPJ válido")
      return
    }

    const regexSenhaMinuscula = /[a-z]/g
    const regexSenhaMaiuscula = /[A-Z]/g
    const regexSenhaNumero = /[0-9]/g
    let msgErroSenha = 'Digite uma senha com '
    if (name === 'senha') {
      if (!valor.match(regexSenhaMinuscula)) {
        msgErroSenha += 'pelo menos uma letra minúscula '
      } else if (!valor.match(regexSenhaMaiuscula)) {
        msgErroSenha += 'pelo menos uma letra maiúscula '
      } else if (!valor.match(regexSenhaNumero)) {
        msgErroSenha += 'pelo menos um número '
      } else if (valor.length < 8) {
        msgErroSenha += 'pelo menos 8 caracteres '
      } else {
        msgErroSenha = ''
      }
      onChange(nome, valor, msgErroSenha)
      return
    }

    onChange(nome, valor)
  }

  return (
    <input
      className='campo'
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      name={name}
      onChange={validarInput}
    />
  )
}