export class Lutadores{
    //ATRIBUTOS
    private nome: string;
    private nacionalidade: string;
    private idade: number;
    private altura: number;
    private peso: number;
    private categoria: string;
    private vitorias: number;
    private derrotas: number;
    private empates: number;
    //CONSTRUTOR
    public constructor(no: string, na: string, id: number, al: number, pe: number, vi: number, de: number, em: number){
        this.nome = no; this.nacionalidade = na; this.idade = id; this.altura = al; this.setPeso(pe); this.vitorias = vi; this.derrotas = de; this.empates = em;
    }
    //METODOS ESPECIAIS
    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string){
        this.nome = nome;
    }
    public getNac():string{
        return this.nacionalidade;
    }
    public setNac(nac:string){
        this.nacionalidade = nac;
    }
    public getIdade():number{
        return this.idade;
    }
    public setIdade(idade:number){
        this.idade = idade;
    }
    public getAltura():number{
        return this.altura;
    }
    public setAltura(altura:number){
        this.altura = altura;
    }
    public getPeso():number{
        return this.peso;
    }
    public setPeso(peso:number){
        this.peso = peso;
        this.setCategoria(peso);
    }
    public getCategoria():string{
        return this.categoria;
    }
    private setCategoria(peso:number){
        if(peso < 52.2){
            this.categoria = 'Invalido';
        }else if(peso <= 70.3){
            this.categoria = 'Leve';
        }else if(peso <= 83.9){
            this.categoria = 'Médio';
        }else if(peso <= 120.2){
            this.categoria = 'Pesado';
        }else{
            this.categoria = 'Inválido';
        }
    }
    public getVitorias():number{
        return this.vitorias;
    }
    public setVitorias(vitorias:number){
        this.vitorias = vitorias;
    }
    public getDerrotas():number{
        return this.derrotas;
    }
    public setDerrotas(derrotas:number){
        this.derrotas = derrotas;
    }
    public getEmpates():number{
        return this.empates;
    }
    public setEmpates(empates:number){
        this.empates = empates;
    }
    //METODOS
    public apresentar():any{
        console.log('Lutador: ' + this.getNome());
        console.log('Origem: ' + this.getNac());
        console.log('Idade: ' + this.getIdade());
        console.log('Altura: ' + this.getAltura());
        console.log('Pesando: ' + this.getPeso() + 'KG');
        console.log('Ganhou: ' + this.getVitorias());
        console.log('Perdeu: ' + this.getDerrotas());
        console.log('Empatou: ' + this.getEmpates());
    }
    public status():any{
        console.log(this.getNome() + ' é um peso ' + this.getCategoria() + this.getVitorias() + ' vitórias, ' + this.getDerrotas() + ' derrótas, ' + this.getEmpates() + ' empates.');
    }
    public ganharLuta():any{
        this.setVitorias(this.getVitorias() + 1);
    }
    public perderLuta():any{
        this.setDerrotas(this.getVitorias() + 1);
    }
    public empatarLuta():any{
        this.setEmpates(this.getVitorias() + 1);
    }
}