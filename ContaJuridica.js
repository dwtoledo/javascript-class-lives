import ContaCorrente from "./ContaCorrente.js"
import Empresa from "./Empresa.js"
import {tipoDeChavePix} from "./Dicionarios/dicionario.js"
import gerarChavePix from "./Utilitarios/StringUtils.js"

export default class ContaJuridica extends ContaCorrente {
    constructor (empresa) {
        if (empresa instanceof Empresa) {
            super(2, ContaCorrente.gerarNumeroConta())      
            this.empresa = empresa
        } else {
            throw new Error ("Não é possível criar essa Conta Juridica")
        }
    }

    adicionarChavesPix(tipo) {
        if (tipo == tipoDeChavePix.CNPJ) {
            if (!this.chavesPix.includes(this.empresa.cnpj)) {
                this.chavesPix.push(this.empresa.cnpj)
                console.log(`A chave CNPJ: ${this.empresa.cnpj} foi incluída com sucesso na lista!`)
                return
            }
            console.log(`A chave CNPJ: ${this.empresa.cnpj} já está cadastrada na lista!`)
            
        } else if (tipo == tipoDeChavePix.ALEATORIA) {
            const chaveGerada = gerarChavePix('LlNN-lNNL-NNNL-LlLL')
            this.chavesPix.push(chaveGerada)
            console.log(`A chave aleatória: ${chaveGerada} foi incluída com sucesso na lista!`)
        } else {
            throw new Error("Tipo de chave não é suportada, erro ao adicionar a chave!")
        }
    }
}