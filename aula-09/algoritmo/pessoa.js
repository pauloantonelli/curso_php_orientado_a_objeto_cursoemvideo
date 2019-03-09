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
