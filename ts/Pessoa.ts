export default class Pessoa {

    constructor(private _nome: string, private _cpf: string) {
        this._nome = _nome
        this._cpf = _cpf
    }

    getNome() : string {
        return this._nome
    }

    getCPF() : string {
        return this._cpf
    }
}