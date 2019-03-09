import { Pessoa } from "./pessoa";
import { Publicacao } from "./publicacao";

export class Livro implements Publicacao{
    //ATRIBUTOS
    private titulo: string;
    private autor: string;
    private totPaginas: number;
    private pagAtual: number;
    private aberto: boolean;
    private leitor: Pessoa;
    constructor(public ti: string, public au: string, public totPgs: number, public pgAt: number, public ab: boolean, public le: Pessoa){
        this.setTitulo(ti); this.setAutor(au); this.setTotPaginas(totPgs); this.setPagAtual(pgAt); this.setAberto(ab); this.setLeitor(le);
    }
    //METODOS ESPECIAIS
    private getTitulo():string{
        return this.titulo;
    }
    private setTitulo(titulo:string){
        this.titulo = titulo;
    }
    private getAutor():string{
        return this.autor;
    }
    private setAutor(autor:string){
        this.autor = autor;
    }
    private getTotPaginas():number{
        return this.totPaginas;
    }
    private setTotPaginas(pgs:number){
        this.totPaginas = pgs;
    }
    private getPagAtual():number{
        return this.pagAtual;
    }
    private setPagAtual(pg:number){
        this.pagAtual = pg;
    }
    private getAberto():boolean{
        return this.aberto;
    }
    private setAberto(aberto:boolean){
        this.aberto = aberto;
    }
    private getLeitor():Pessoa{
        return this.leitor;
    }
    private setLeitor(leitor:Pessoa){
        this.leitor = leitor;
    }
    //METODOS PUBLICOS
    public detalhes(){
        let text = [];
        text[0] = "Livro " +  this.getTitulo() + " escrito por " + this.getAutor() + "\n<br/>";
        text[1] = "Com total de " + this.getTotPaginas() + " páginas \n<br/>";
        text[2] = "Esta aberto? " + this.getAberto();
        text[3] = "Sendo lido nesse momento por " + this.getLeitor().verNome() + ", que esta na pagina " + this.getPagAtual();
        return text;
    }
    public abrir(){
        this.setAberto(true);
        this.getAberto();
    }
    public fechar(){
        this.setAberto(false);
        this.getAberto();
    }
    public folhear(pg:number){
        if(pg < this.totPaginas){
            this.setPagAtual(pg);
        }else if(pg >= 0){
            this.setPagAtual(pg);
        }else{
            console.log("Fim do livro!");
        }
    }
    public avancarPag(){
        if(this.getPagAtual() < this.totPaginas){
            this.setPagAtual(this.getPagAtual() + 1);
        }else{
            console.log("Fim do livro!");
        }
    }
    public voltarPag(){
        if(this.getPagAtual() > 0){
            this.setPagAtual(this.getPagAtual() - 1);
        }else{
            console.log("Comeco do livro");
        }
    }
}