import ContaCorrente from "./ContaCorrente.js"
import gerarChavePix from "./Utilitarios/StringUtils.js"
import Pessoa from "./Pessoa.js"
import {tipoDeChavePix} from "./Dicionarios/dicionario.js"

export default class ContaFisica extends ContaCorrente {
    constructor (pessoa) {
        if (pessoa instanceof Pessoa) {
            super(1, ContaCorrente.gerarNumeroConta())
            this.pessoa = pessoa
        } else {
            throw new Error ("Não é possível criar essa Conta Física")
        }
    }

    adicionarChavesPix(tipo) {
        if (tipo == tipoDeChavePix.CPF) {
            if (!this.chavesPix.includes(this.pessoa.cpf)) {
                this.chavesPix.push(this.pessoa.cpf)
                console.log(`A chave CPF: ${this.pessoa.cpf} foi incluída com sucesso na lista!`)
                return
            }
            console.log(`A chave CPF: ${this.pessoa.cpf} já está cadastrada na lista!`)
            
        } else if (tipo == tipoDeChavePix.ALEATORIA) {
            const chaveGerada = gerarChavePix('LlNN-lNNL-NNNL-LlLL')
            this.chavesPix.push(chaveGerada)
            console.log(`A chave aleatória: ${chaveGerada} foi incluída com sucesso na lista!`)
        } else {
            throw new Error("Tipo de chave não é suportada, erro ao adicionar a chave!")
        }
    }
}