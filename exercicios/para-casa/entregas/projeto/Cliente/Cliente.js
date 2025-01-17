
const Conta = require("../Conta/Conta");

class Cliente {
  nome;
  #cpf;
  #renda;
  #conta;

registrarCliente(nome, cpf, renda, conta){
    if(conta instanceof Conta){
        this.nome = nome;
        this.#cpf = cpf;
        this.#renda = renda;
        this.#conta = conta;

        return "Cliente Cadastrado";
    } else {
        throw new Error("Erro no cadastro, dados inválidos")
    }

  }
}

module.exports = Cliente;
