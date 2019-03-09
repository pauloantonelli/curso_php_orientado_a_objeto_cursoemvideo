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
        this.getTitulo();
        this.getAutor();
        this.getTotPaginas();
        this.getPagAtual();
        this.getAberto();
        this.getLeitor();
    };
    Livro.prototype.abrir = function () {
        this.setAberto(true);
        this.getAberto();
    };
    Livro.prototype.fechar = function () {
        this.setAberto(false);
        this.getAberto();
    };
    Livro.prototype.folhear = function () {
        this.avancarPag();
    };
    Livro.prototype.avancarPag = function () {
        this.setPagAtual(this.getPagAtual() + 1);
    };
    Livro.prototype.voltarPag = function () {
        this.setPagAtual(this.getPagAtual() - 1);
    };
    return Livro;
}());
exports.Livro = Livro;
