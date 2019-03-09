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
        this.getTitulo();
        this.getAutor();
        this.getTotPaginas();
        this.getPagAtual();
        this.getAberto();
        this.getLeitor();
    }
    public abrir(){
        this.setAberto(true);
        this.getAberto();
    }
    public fechar(){
        this.setAberto(false);
        this.getAberto();
    }
    public folhear(){
        this.avancarPag();
    }
    public avancarPag(){
        this.setPagAtual(this.getPagAtual() + 1);
    }
    public voltarPag(){
        this.setPagAtual(this.getPagAtual() - 1);
    }
}