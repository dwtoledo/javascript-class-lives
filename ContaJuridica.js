import ContaCorrente from "./ContaCorrente.js"
import Empresa from "./Empresa.js"

export default class ContaJuridica extends ContaCorrente {
    constructor (empresa) {
        if (empresa instanceof Empresa) {
            super(2, ContaCorrente.gerarNumeroConta())      
            this.empresa = empresa
        } else {
            throw new Error ("Não é possível criar essa Conta Juridica")
        }
        
    }
}