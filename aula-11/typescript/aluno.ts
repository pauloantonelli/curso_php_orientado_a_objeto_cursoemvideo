import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa{
    //ATRIBUTOS
    private matricula: number; 
    private curso: string;
    
    //METODOS ESPECIAIS
    public getMatricula():number{
        return this.matricula;
    }
    public setMatricula(matr:number){
        this.matricula = matr;
    }
    public getCurso():string{
        return this.curso;
    }
    public setCurso(curso:string){
        this.curso = curso;
    }
    //METODOS PUBLICOS
    public /*final*/ pagarMensalidade(){
        console.log("Pagando mensalidade do aluno " + this.getNome());
    }
}