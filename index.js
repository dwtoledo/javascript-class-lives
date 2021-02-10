import Pessoa from "./Pessoa.js"
import Empresa from "./Empresa.js"
import ContaFisica from "./ContaFisica.js"
import ContaJuridica from "./ContaJuridica.js"
import {tipoDeChavePix} from "./Dicionarios/dicionario.js"

const pessoa1 = new Pessoa("Adielson", "999.888.777-66")
const contaFisica1 = new ContaFisica (pessoa1)

const empresa1 = new Empresa("Twitch", "99.888.777/0001-6")
const contaJuridica1 = new ContaJuridica (empresa1)

contaFisica1.adicionarChavesPix(tipoDeChavePix.CPF)
contaFisica1.adicionarChavesPix(tipoDeChavePix.ALEATORIA)
contaJuridica1.adicionarChavesPix(tipoDeChavePix.CNPJ)
contaJuridica1.adicionarChavesPix(tipoDeChavePix.ALEATORIA)

console.log(contaFisica1)
console.log(contaJuridica1)





