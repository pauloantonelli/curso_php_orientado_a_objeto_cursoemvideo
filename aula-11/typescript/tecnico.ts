import { Aluno } from "./aluno";

export class Tecnico extends Aluno{
    //ATRIBUTOS
    public registroProfissional: number;
    constructor(registroProfissional){
        super();
    }
    //METODOS ESPECIAIS
    public getReg():number{
        return this.registroProfissional;
    }
    public setReg(reg:number){
        this.registroProfissional = reg;
    }
    //METODOS PUBLICOS
    public praticar(){

    }
}