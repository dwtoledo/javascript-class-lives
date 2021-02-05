export default class ContaCorrente {
    constructor (agencia, conta) {
        this.agencia = agencia
        this.conta = conta
        this._saldo = 0
    }

    get saldo(){
        return this._saldo
    }

    static gerarNumeroConta() {
        let min = 10000
        let max = 99999
        let numero = Math.floor(min + Math.random()*(max - min))
        return numero
    }
}