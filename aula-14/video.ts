import { AcoesVideo } from "./acoesVideo.js";

export class Video implements AcoesVideo{
    private titulo: string; 
    private avaliacao: number;
    private views: number;
    private curtidas: number;
    private reproduzindo: boolean;
    constructor(titulo){
        this.titulo = titulo; this.avaliacao = 1; this.views = 0; this.curtidas = 0; this.reproduzindo = false;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public setTitulo(titulo:string){
        this.titulo = titulo;
    }
    public getAvaliacao():number{
        return this.avaliacao;
    }
    public setAvaliacao(ava:number){
        let media:number;
        media = (this.avaliacao + ava) / this.views;
        this.avaliacao = media;
    }
    public getViews():number{
        return this.views;
    }
    public setViews(views:number){
        this.views = views;
    }
    public getCurtidas():number{
        return this.curtidas;
    }
    public setCurtidas(curtidas:number){
        this.curtidas = curtidas;
    }
    public getReproduzindo():boolean{
        return this.reproduzindo;
    }
    public setReproduzindo(repro:boolean){
        this.reproduzindo = repro;
    }

    public play(){
        this.setReproduzindo(true);
    }
    public pause(){
        this.setReproduzindo(false);
    }
    public like(){
        this.setCurtidas(this.getCurtidas() + 1);
    }
}