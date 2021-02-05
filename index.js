import Pessoa from "./Pessoa.js"
import Empresa from "./Empresa.js"
import ContaFisica from "./ContaFisica.js"
import ContaJuridica from "./ContaJuridica.js"

const pessoa1 = new Pessoa("Adielson", "999.888.777-66")
const empresa1 = new Empresa("Twitch", "99.888.777/0001-6")

const contaFisica1 = new ContaFisica (1, 85695, pessoa1)
const contaJuridica1 = new ContaJuridica (2, 45785, empresa1)