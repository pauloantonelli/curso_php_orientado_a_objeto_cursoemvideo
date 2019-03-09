export class Visualizacao {
    constructor(gafanhoto, video) {
        this.gafanhoto = gafanhoto;
        this.video = video;
        this.espectador = gafanhoto;
        this.filme = video;
        this.filme.setViews(this.filme.getViews() + 1);
        this.espectador.setTotAssistido(this.espectador.getTotAssistido() + 1);
    }
    getEspectador() {
        return this.espectador;
    }
    setEspectador(espec) {
        this.espectador = espec;
    }
    getFilme() {
        return this.filme;
    }
    setFilme(filme) {
        this.filme = filme;
    }
    avaliar() {
        this.filme.setAvaliacao(5);
    }
    avaliarNota(nota) {
        this.filme.setAvaliacao(nota);
    }
    avaliarPorc(porc) {
        let nota;
        if (porc <= 20) {
            nota = 3;
        }
        else if (porc <= 50) {
            nota = 5;
        }
        else if (porc <= 90) {
            nota = 8;
        }
        else {
            nota = 10;
        }
        this.avaliarNota(nota);
    }
}
