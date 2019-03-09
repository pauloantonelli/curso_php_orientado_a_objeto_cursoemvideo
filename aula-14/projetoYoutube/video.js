export class Video {
    constructor(titulo) {
        this.titulo = titulo;
        this.avaliacao = 1;
        this.views = 0;
        this.curtidas = 0;
        this.reproduzindo = false;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAvaliacao() {
        return this.avaliacao;
    }
    setAvaliacao(ava) {
        let media;
        media = (this.avaliacao + ava) / this.views;
        this.avaliacao = media;
    }
    getViews() {
        return this.views;
    }
    setViews(views) {
        this.views = views;
    }
    getCurtidas() {
        return this.curtidas;
    }
    setCurtidas(curtidas) {
        this.curtidas = curtidas;
    }
    getReproduzindo() {
        return this.reproduzindo;
    }
    setReproduzindo(repro) {
        this.reproduzindo = repro;
    }
    play() {
        this.setReproduzindo(true);
    }
    pause() {
        this.setReproduzindo(false);
    }
    like() {
        this.setCurtidas(this.getCurtidas() + 1);
    }
}
