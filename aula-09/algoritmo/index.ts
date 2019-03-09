import { Livro } from './livro';
import { Pessoa } from './pessoa';

let pessoa = [];
let livro = [];

pessoa[0] = new Pessoa('Paulo', 1988, 'Masculino');
pessoa[1] = new Pessoa('Luciele', 1997, 'Feminino');

livro[0] = new Livro('Estrutura de dados e Algoritmos em JavaScript', 'Loiane Grooner', 350, 1, false, pessoa[0]);
livro[1] = new Livro('Casais inteligentes enriquecem juntos', 'Gustavo Cerbasi', 150, 35, false, pessoa[1]);

console.log(livro[0]);