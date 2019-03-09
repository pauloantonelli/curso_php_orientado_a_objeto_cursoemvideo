import { Pessoa } from './pessoa.js';

export class Aluno extends Pessoa{
    constructor(matricula, curso){
        //ATRIBUTOS
        super();//USADO PARA INICIALIZAR O THIS. NO CONSTRUTOR, POR QUE TECNICAMENTE ATE QUE O CONSTRUTOR EXECUTE TODO O JS NAO SABE OQUE É O THIS.
        this.matricula = matricula; this.curso = curso;
        //METODOS ESPECIAIS
        this.getMatricula = function(){
            return this.matricula;
        }
        this.setMatricula = function(matr){
            this.matricula = matr;
        }
        this.getCurso = function(){
            return this.curso;
        }
        this.setCurso = function(curso){
            this.curso = curso;
        }
    }
    //METODOS PUBLICOS
    verMatricula(){
        return this.getMatricula();
    }
    mudarMatricula(matr){
        this.setMatricula(matr);
    }
    verCurso(){
        return this.getCurso();
    }
    mudarCurso(curso){
        this.setCurso(curso);
    }
    cancelarMatricula(){
        console.log("A matricula será cancelada")
    }
}