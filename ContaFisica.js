import ContaCorrente from "./ContaCorrente.js"

export default class ContaFisica extends ContaCorrente {
    constructor (agencia, conta, pessoa) {
        super(agencia, conta)
        this.pessoa = pessoa
    }
}