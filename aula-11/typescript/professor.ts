import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    //ATRIBUTOS
    public especialidade: string; 
    public salario: string;
    constructor(){
        super();
    }
    //METODOS ESPECIAIS
    public getEspecialidade():string{
        return this.especialidade;
    }
    public setEspecialidade(espec:string){
        this.especialidade = espec;
    }
    public getSalario():string{
        return this.salario;
    }
    public setSalario(sal:string){
        this.salario = sal;
    }
    //METODOS PUBLICOS
    public receberAumento(aumento){
        this.setSalario(this.getSalario() + aumento);
    }
}