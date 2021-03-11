export default class Empresa {

    constructor(private _nome: string, private _cnpj: string) {
        this._nome = _nome
        this._cnpj = _cnpj
    }

    getNome() : string {
        return this._nome
    }

    getCNPJ() : string {
        return this._cnpj
    }
}