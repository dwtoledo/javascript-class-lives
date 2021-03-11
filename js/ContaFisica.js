import ContaCorrente from "./ContaCorrente.js";
import gerarChavePix from "./Utilitarios/StringUtils.js";
import { tipoDeChavePix } from "./Dicionarios/dicionario.js";
export default class ContaFisica extends ContaCorrente {
    constructor(_pessoa) {
        super(1, ContaCorrente.gerarNumeroConta());
        this._pessoa = _pessoa;
        this._pessoa = _pessoa;
    }
    adicionarChavesPix(tipo) {
        if (tipo == tipoDeChavePix.CPF) {
            const cpf = this._pessoa.getCPF();
            if (!(cpf in this.getChavesPix())) {
                this.setChavesPix(cpf);
                console.log(`A chave CPF: ${cpf} foi incluída com sucesso na lista!`);
                return;
            }
            console.log(`A chave CPF: ${cpf} já está cadastrada na lista!`);
        }
        else if (tipo == tipoDeChavePix.ALEATORIA) {
            const chaveGerada = gerarChavePix("LlNN-lNNL-NNNL-LlLL");
            this.setChavesPix(chaveGerada);
            console.log(`A chave aleatória: ${chaveGerada} foi incluída com sucesso na lista!`);
        }
        else {
            throw new Error("Tipo de chave não é suportada, erro ao adicionar a chave!");
        }
    }
}
