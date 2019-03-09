import { Aluno } from "./aluno.js";
export class Bolsista extends Aluno {
    constructor() {
        super();
    }
    //METODOS ESPECIAIS
    getBolsa() {
        return this.bolsa;
    }
    setBolsa(bolsa) {
        this.bolsa = bolsa;
    }
    //METODOS PUBLICOS
    renovarBolsa() {
        console.log("Bolsa Renovada!");
    }
    pagarMensalidade() {
        console.log(this.nome + " é bolsista, então paga com desconto!");
    }
}
