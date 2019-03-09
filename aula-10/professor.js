import { Pessoa } from './pessoa.js';

export class Professor extends Pessoa{
    constructor(especialidade, salario){
        //ATRIBUTOS
        super();//USADO PARA INICIALIZAR O THIS. NO CONSTRUTOR, POR QUE TECNICAMENTE ATE QUE O CONSTRUTOR EXECUTE TODO O JS NAO SABE OQUE É O THIS.
        this.especialidade = especialidade; this.salario = salario;
        //METODOS ESPECIAIS
        this.getEspecialidade = function(){
            return this.especialidade;
        }
        this.setEspecialidade = function(espec){
            this.especialidade = espec;
        }
        this.getSalario = function(){
            return this.salario;
        }
        this.setSalario = function(sal){
            this.salario = sal;
        }
    }
    //METODOS PUBLICOS
    verEspecialidade(){
        return this.getEspecialidade();
    }
    mudarEspecialidade(espec){
        this.setEspecialidade(espec);
    }
    verSalario(){
        return this.getSalario();
    }
    mudarSalario(sal){
        this.setSalario(sal);
    }
    receberAumento(){
        console.log("O aumento será feito");
    }
}