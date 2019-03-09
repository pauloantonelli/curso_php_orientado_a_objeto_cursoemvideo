export abstract class Pessoa{
    protected nome: string;
    protected idade: number;
    protected sexo: string;
    protected experiencia: number;
    constructor(protected nomes: string, protected idades: number, protected sexos: string){
        this.nome = nomes; this.idade = idades; this.sexo = sexos; this.experiencia = 0;
    }
    protected getNome():string{
        return this.nome;
    }
    protected setNome(nome:string){
        this.nome = nome;
    }
    protected getIdade():number{
        return this.idade;
    }
    protected setIdade(idade:number){
        this.idade = idade;
    }
    protected getSexo():string{
        return this.sexo;
    }
    protected setSexo(sexo:string){
        this.sexo = sexo;
    }
    protected getExperiencia():number{
        return this.experiencia;
    }
    protected setExperiencia(expe:number){
        this.experiencia = expe;
    }

    protected ganharExp(exp:number){
        this.setExperiencia(this.getExperiencia() + exp);
    }
}