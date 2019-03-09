import { Aluno } from "./aluno.js";
export class Tecnico extends Aluno {
    constructor(registroProfissional) {
        super();
    }
    //METODOS ESPECIAIS
    getReg() {
        return this.registroProfissional;
    }
    setReg(reg) {
        this.registroProfissional = reg;
    }
    //METODOS PUBLICOS
    praticar() {
    }
}
