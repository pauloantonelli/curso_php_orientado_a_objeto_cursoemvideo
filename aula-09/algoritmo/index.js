"use strict";
exports.__esModule = true;
var livro_1 = require("./livro");
var pessoa_1 = require("./pessoa");
var pessoa = [];
var livro = [];
pessoa[0] = new pessoa_1.Pessoa('Paulo', 1988, 'Masculino');
pessoa[1] = new pessoa_1.Pessoa('Luciele', 1997, 'Feminino');
livro[0] = new livro_1.Livro('Estrutura de dados e Algoritmos em JavaScript', 'Loiane Grooner', 350, 1, false, pessoa[0]);
livro[1] = new livro_1.Livro('Casais inteligentes enriquecem juntos', 'Gustavo Cerbasi', 150, 35, false, pessoa[1]);
console.log(livro[0]);
