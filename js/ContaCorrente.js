export default class ContaCorrente {
    constructor(agencia, conta) {
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = 0;
        this._chavesPix = [];
    }
    getAgencia() {
        return this._agencia;
    }
    getConta() {
        return this._conta;
    }
    getSaldo() {
        return this._saldo;
    }
    getChavesPix() {
        return this._chavesPix;
    }
    setChavesPix(chave) {
        this._chavesPix.push(chave);
    }
    static gerarNumeroConta() {
        let min = 10000;
        let max = 99999;
        let numero = Math.floor(min + Math.random() * (max - min));
        return numero;
    }
}
