export class Pessoa{
    //ATRIBUTOS
    private nome: string;
    private idade: number;
    private sexo: string;
    constructor(public no:string, public id:number, public se: string){
        this.nome = no; this.acharIdade(id); this.sexo = se;
    }
    //METODOS ESPECIAIS
    private getNome():string{
        return this.nome;
    }
    private setNome(nome:string){
        this.nome = nome;
    }
    private getIdade():number{
        return this.idade;
    }
    private setIdade(idade:number){
        this.idade = idade;
    }
    private getSexo():string{
        return this.sexo;
    }
    private setSexo(sexo:string){
        this.sexo = sexo;
    }
    private acharIdade(ano:number){
        let idade:number = 2018 - ano;
        this.setIdade(idade);
    }
    //METODOS PUBLICOS
    public fazerAniver():any{
        this.setIdade(this.getIdade() + 1);
    }
    public verNome():string{
        return this.getNome();
    }
    public mudarNome(nome:string){
        this.setNome(nome);
    }
    public verIdade():number{
        return this.getIdade();
    }
    public mudarIdade(idade:number){
        this.setIdade(idade);
    }
    public mudarAnoNacimento(ano:number){
        this.acharIdade(ano);
    }
    public verSexo():string{
        return this.getSexo();
    }
    public mudarSexo(sexo:string){
        this.setSexo(sexo);
    }
}