import { Lutadores } from "./lutadores";

export class Luta{
    //METODOS
    private desafiado: Lutadores;
    private desafiante: Lutadores;
    private rounds: number;
    private aprovada: string;
    //METODOS ESPECIAIS
    public getDesafiado():Lutadores{
        return this.desafiado;
    }
    public setDesafiado(desafiado:Lutadores){
        this.desafiado = desafiado;
    }
    public getDesafiante():Lutadores{
        return this.desafiante;
    }
    public setDesafiante(desafiante:Lutadores){
        this.desafiante = desafiante;
    }
    public getRounds():number{
        return this.rounds;
    }
    public setRounds(rounds:number){
        this.rounds = rounds;
    }
    public getAprovada():string{
        return this.aprovada;
    }
    public setAprovada(aprovada:string){
        this.aprovada = aprovada;
    }
    //METODOS
    public marcarLuta(){

    }
    public lutar(){
        
    }
}