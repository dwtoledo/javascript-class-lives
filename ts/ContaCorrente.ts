export default class ContaCorrente {

    private _agencia: number
    private _conta: number
    private _saldo: number;
    private _chavesPix: Array<string>

    constructor (agencia: number, conta: number) {
        this._agencia = agencia
        this._conta = conta
        this._saldo = 0
        this._chavesPix = []
    }

    getAgencia() : number {
        return this._agencia
    }

    getConta() : number {
        return this._conta;
    }

    getSaldo() : number {
        return this._saldo;
    }

    getChavesPix() : Array<string> {
        return this._chavesPix;
    }

    setChavesPix(chave: string) {
        this._chavesPix.push(chave);
    }

    static gerarNumeroConta() {
        let min = 10000
        let max = 99999
        let numero = Math.floor(min + Math.random()*(max - min))
        return numero
    }
}