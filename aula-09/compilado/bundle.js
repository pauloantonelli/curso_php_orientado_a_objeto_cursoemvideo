(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var livro_1 = require("./livro");
var pessoa_1 = require("./pessoa");
var pessoa = [];
var livro = [];
pessoa[0] = new pessoa_1.Pessoa('Paulo', 1988, 'Masculino');
pessoa[1] = new pessoa_1.Pessoa('Luciele', 1997, 'Feminino');
livro[0] = new livro_1.Livro('Estrutura de dados e Algoritmos em JavaScript', 'Loiane Grooner', 350, 0, false, pessoa[0]);
livro[1] = new livro_1.Livro('Casais inteligentes enriquecem juntos', 'Gustavo Cerbasi', 150, 35, true, pessoa[1]);
var escolhido = 1;
console.log(livro[escolhido].abrir());
console.log(livro[escolhido].detalhes());
console.log(livro[escolhido].folhear(200));
console.log(livro[escolhido].detalhes());
console.log(livro[escolhido].avancarPag());
console.log(livro[escolhido].detalhes());

},{"./livro":2,"./pessoa":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(no, id, se) {
        this.no = no;
        this.id = id;
        this.se = se;
        this.nome = no;
        this.acharIdade(id);
        this.sexo = se;
    }
    //METODOS ESPECIAIS
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo;
    };
    Pessoa.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Pessoa.prototype.acharIdade = function (ano) {
        var idade = 2018 - ano;
        this.setIdade(idade);
    };
    //METODOS PUBLICOS
    Pessoa.prototype.fazerAniver = function () {
        this.setIdade(this.getIdade() + 1);
    };
    Pessoa.prototype.verNome = function () {
        return this.getNome();
    };
    Pessoa.prototype.mudarNome = function (nome) {
        this.setNome(nome);
    };
    Pessoa.prototype.verIdade = function () {
        return this.getIdade();
    };
    Pessoa.prototype.mudarIdade = function (idade) {
        this.setIdade(idade);
    };
    Pessoa.prototype.mudarAnoNacimento = function (ano) {
        this.acharIdade(ano);
    };
    Pessoa.prototype.verSexo = function () {
        return this.getSexo();
    };
    Pessoa.prototype.mudarSexo = function (sexo) {
        this.setSexo(sexo);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;

},{}]},{},[1]);
