import { Pessoa } from "./pessoa.js";

export class Gafanhoto extends Pessoa{
    private login: string;
    private totAssistido: number;
    constructor(nome: string, idade:number, sexo: string, login: string){
        super(nome, idade, sexo);
        this.login = login;
        this.totAssistido = 0;
    }
    public getLogin():string{
        return this.login;
    }
    public setLogin(login:string){
        this.login = login;
    }
    public getTotAssistido():number{
        return this.totAssistido;
    }
    public setTotAssistido(tot:number){
        this.totAssistido = tot;
    }

    public viuMaisUm(){
        this.setTotAssistido(1);
    }

    public ganharExp(exp:number){
        this.setExperiencia(exp);
    }
}