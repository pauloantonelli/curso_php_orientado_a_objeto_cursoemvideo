import { Livro } from './livro';
import { Pessoa } from './pessoa';

let pessoa = [];
let livro = [];

pessoa[0] = new Pessoa('Paulo', 1988, 'Masculino');
pessoa[1] = new Pessoa('Luciele', 1997, 'Feminino');

livro[0] = new Livro('Estrutura de dados e Algoritmos em JavaScript', 'Loiane Grooner', 350, 0, false, pessoa[0]);
livro[1] = new Livro('Casais inteligentes enriquecem juntos', 'Gustavo Cerbasi', 150, 35, true, pessoa[1]);

var escolhido = 1;
console.log(livro[escolhido].abrir());
console.log(livro[escolhido].detalhes());
console.log(livro[escolhido].folhear(200));
console.log(livro[escolhido].detalhes());
console.log(livro[escolhido].avancarPag());
console.log(livro[escolhido].detalhes());

/*
COMANDOS PARA RODAR:
1º - tsc index.ts
2º - browserify index.js -o bundle.js
*/