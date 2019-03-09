"use strict";
exports.__esModule = true;
var Livro = /** @class */ (function () {
    function Livro(ti, au, totPgs, pgAt, ab, le) {
        this.ti = ti;
        this.au = au;
        this.totPgs = totPgs;
        this.pgAt = pgAt;
        this.ab = ab;
        this.le = le;
        this.setTitulo(ti);
        this.setAutor(au);
        this.setTotPaginas(totPgs);
        this.setPagAtual(pgAt);
        this.setAberto(ab);
        this.setLeitor(le);
    }
    //METODOS ESPECIAIS
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.getTotPaginas = function () {
        return this.totPaginas;
    };
    Livro.prototype.setTotPaginas = function (pgs) {
        this.totPaginas = pgs;
    };
    Livro.prototype.getPagAtual = function () {
        return this.pagAtual;
    };
    Livro.prototype.setPagAtual = function (pg) {
        this.pagAtual = pg;
    };
    Livro.prototype.getAberto = function () {
        return this.aberto;
    };
    Livro.prototype.setAberto = function (aberto) {
        this.aberto = aberto;
    };
    Livro.prototype.getLeitor = function () {
        return this.leitor;
    };
    Livro.prototype.setLeitor = function (leitor) {
        this.leitor = leitor;
    };
    //METODOS PUBLICOS
    Livro.prototype.detalhes = function () {
        var text = [];
        text[0] = "Livro " + this.getTitulo() + " escrito por " + this.getAutor() + "\n<br/>";
        text[1] = "Com total de " + this.getTotPaginas() + " páginas \n<br/>";
        text[2] = "Esta aberto? " + this.getAberto();
        text[3] = "Sendo lido nesse momento por " + this.getLeitor().verNome() + ", que esta na pagina " + this.getPagAtual();
        return text;
    };
    Livro.prototype.abrir = function () {
        this.setAberto(true);
        this.getAberto();
    };
    Livro.prototype.fechar = function () {
        this.setAberto(false);
        this.getAberto();
    };
    Livro.prototype.folhear = function (pg) {
        if (pg < this.totPaginas) {
            this.setPagAtual(pg);
        }
        else if (pg >= 0) {
            this.setPagAtual(pg);
        }
        else {
            console.log("Fim do livro!");
        }
    };
    Livro.prototype.avancarPag = function () {
        if (this.getPagAtual() < this.totPaginas) {
            this.setPagAtual(this.getPagAtual() + 1);
        }
        else {
            console.log("Fim do livro!");
        }
    };
    Livro.prototype.voltarPag = function () {
        if (this.getPagAtual() > 0) {
            this.setPagAtual(this.getPagAtual() - 1);
        }
        else {
            console.log("Comeco do livro");
        }
    };
    return Livro;
}());
exports.Livro = Livro;
