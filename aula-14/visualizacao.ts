import { Video } from "./video.js";
import { Gafanhoto } from "./gafanhoto.js";

export class Visualizacao{
    private espectador: Gafanhoto;
    private filme: Video;
    constructor(protected gafanhoto: Gafanhoto, protected video: Video){
        this.espectador = gafanhoto; this.filme = video; 
        this.filme.setViews(this.filme.getViews() + 1);
        this.espectador.setTotAssistido(this.espectador.getTotAssistido() + 1);
    }

    public getEspectador():Gafanhoto{
        return this.espectador;
    }
    public setEspectador(espec:Gafanhoto){
        this.espectador = espec;
    }
    public getFilme():Video{
        return this.filme;
    }
    public setFilme(filme:Video){
        this.filme = filme;
    }

    public avaliar(){
        this.filme.setAvaliacao(5);
    }
    public avaliarNota(nota:number){
        this.filme.setAvaliacao(nota);
    }
    public avaliarPorc(porc:number){
        let nota:number;
        if(porc <= 20){
            nota = 3;
        }else if(porc <= 50){
            nota = 5;
        }else if(porc <= 90){
            nota = 8;
        }else{
            nota = 10;
        }
        this.avaliarNota(nota);
    }
}