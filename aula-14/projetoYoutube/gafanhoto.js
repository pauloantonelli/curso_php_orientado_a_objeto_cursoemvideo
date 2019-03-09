import { Pessoa } from "./pessoa.js";
export class Gafanhoto extends Pessoa {
    constructor(nome, idade, sexo, login) {
        super(nome, idade, sexo);
        this.login = login;
        this.totAssistido = 0;
    }
    getLogin() {
        return this.login;
    }
    setLogin(login) {
        this.login = login;
    }
    getTotAssistido() {
        return this.totAssistido;
    }
    setTotAssistido(tot) {
        this.totAssistido = tot;
    }
    viuMaisUm() {
        this.setTotAssistido(1);
    }
    ganharExp(exp) {
        this.setExperiencia(exp);
    }
}
