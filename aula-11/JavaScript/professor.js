import { Pessoa } from "./pessoa.js";
export class Professor extends Pessoa {
    constructor() {
        super();
    }
    //METODOS ESPECIAIS
    getEspecialidade() {
        return this.especialidade;
    }
    setEspecialidade(espec) {
        this.especialidade = espec;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(sal) {
        this.salario = sal;
    }
    //METODOS PUBLICOS
    receberAumento(aumento) {
        this.setSalario(this.getSalario() + aumento);
    }
}
