export abstract class Pessoa{
    //ATRIBUTOS
    protected nome: string;
    protected idade: number; 
    protected sexo: string;
    constructor(){
    }
    //METODOS ESPECIAIS
    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string){
        this.nome = nome;
    }
    public getAniver():number{
        return this.idade;
    }
    public setAniver(idade:number){
        this.idade = idade;
    }
    public getSexo():string{
        return this.sexo;
    }
    public setSexo(sexo:string){
        this.sexo = sexo;
    }
    //METODOS PUBLICOS
    public /*final*/ fazerAniver(){
        this.setAniver(this.getAniver() + 1);
    }
}