import ContaCorrente from "./ContaCorrente.js"

export default class ContaJuridica extends ContaCorrente {
    constructor (agencia, conta, empresa) {
        super(agencia, conta)      
        this.empresa = empresa
    }
}