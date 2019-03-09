import { Pessoa } from "./pessoa.js";
export class Aluno extends Pessoa {
    //METODOS ESPECIAIS
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matr) {
        this.matricula = matr;
    }
    getCurso() {
        return this.curso;
    }
    setCurso(curso) {
        this.curso = curso;
    }
    //METODOS PUBLICOS
    pagarMensalidade() {
        console.log("Pagando mensalidade do aluno " + this.getNome());
    }
}
