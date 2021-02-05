import ContaCorrente from "./ContaCorrente.js"
import Pessoa from "./Pessoa.js"

export default class ContaFisica extends ContaCorrente {
    constructor (pessoa) {
        if (pessoa instanceof Pessoa) {
            super(1, ContaCorrente.gerarNumeroConta())
            this.pessoa = pessoa
        } else {
            throw new Error ("Não é possível criar essa Conta Física")
        }
    }
}