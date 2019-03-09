import { Aluno } from "./aluno";

export class Bolsista extends Aluno{
    //ATRIBUTOS
    private bolsa: number;
    constructor(){
        super();
    }
    //METODOS ESPECIAIS
    public getBolsa():number{
        return this.bolsa;
    }
    public setBolsa(bolsa:number){
        this.bolsa = bolsa;
    }
    //METODOS PUBLICOS
    public renovarBolsa(){
        console.log("Bolsa Renovada!");
    }
    public pagarMensalidade(){//TESTAR SE ESSA FUNCAO SE SOBREPOS A DE ALUNO
        console.log(this.nome + " é bolsista, então paga com desconto!");
    }
}