import { Pessoa } from './pessoa.js';

export class Funcionario extends Pessoa{
    constructor(setor, trabalhando){
        //ATRIBUTOS
        super();//USADO PARA INICIALIZAR O THIS. NO CONSTRUTOR, POR QUE TECNICAMENTE ATE QUE O CONSTRUTOR EXECUTE TODO O JS NAO SABE OQUE É O THIS.
        this.setor = setor; this.trabalhando = trabalhando;
        //METODOS ESPECIAIS
        this.getSetor = function(){
            return this.setor;
        }
        this.setSetor = function(setor){
            this.setor = setor;
        }
        this.getTrabalhando = function(){
            return this.trabalhando;
        }
        this.setTrabalhando = function(){
            this.trabalhando = !this.trabalhando;
        }
    }
    //METODOS PUBLICOS
    verSetor(){
        return this.getSetor();
    }
    mudarSetor(setor){
        this.setSetor(setor);
    }
    verTrabalhando(){
        return this.getTrabalhando();
    }
    mudarTrabalhando(){
        this.setTrabalhando();
    }
    mudarTrabalho(){
        console.log("O trabalho será mudado");
    }
}