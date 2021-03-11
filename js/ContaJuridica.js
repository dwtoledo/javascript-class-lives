import ContaCorrente from "./ContaCorrente.js";
import { tipoDeChavePix } from "./Dicionarios/dicionario.js";
import gerarChavePix from "./Utilitarios/StringUtils.js";
export default class ContaJuridica extends ContaCorrente {
    constructor(_empresa) {
        super(2, ContaCorrente.gerarNumeroConta());
        this._empresa = _empresa;
        this._empresa = _empresa;
    }
    adicionarChavesPix(tipo) {
        if (tipo == tipoDeChavePix.CNPJ) {
            const cnpj = this._empresa.getCNPJ();
            if (!(cnpj in this.getChavesPix())) {
                this.setChavesPix(cnpj);
                console.log(`A chave CNPJ: ${cnpj} foi incluída com sucesso na lista!`);
                return;
            }
            console.log(`A chave CNPJ: ${cnpj} já está cadastrada na lista!`);
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
