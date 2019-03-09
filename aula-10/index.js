import { Pessoa } from './pessoa.js';
import { Aluno } from './aluno.js';
import { Professor } from './professor.js';
import { Funcionario } from './funcionario.js';

let p = [];

p[0] = new Pessoa();
p[1] = new Aluno();
p[2] = new Professor();
p[3] = new Funcionario();

p[0].mudarNome("Paulo");
p[1].mudarNome("Luciele");
p[2].mudarNome("Rosana");
p[3].mudarNome("Karol");

p[0].mudarIdade(25);
p[1].mudarIdade(21);
p[2].mudarIdade(35);
p[3].mudarIdade(40);

p[0].mudarSexo("Masculino");
p[1].mudarSexo("Feminino");
p[2].mudarSexo("Feminino");
p[3].mudarSexo("Feminino");

p[0].fazerAniver();
p[1].mudarCurso("Cozinha");
p[2].mudarEspecialidade("Engradidar");
p[3].mudarSetor("Ir para Igreja");

p[1].mudarMatricula("Ingles");
p[2].setSalario(2500.75);
p[3].mudarTrabalhando();

console.log(p[0]);
console.log(p[1]);
console.log(p[2]);
console.log(p[3]);

console.log("clientes cadastrados: ")
console.log(p[0].getNome() + " " + p[0].getIdade() + " " + p[0].getSexo() + ", " + " " +  p[1].getNome() + " " +  p[1].getIdade() + " " +  p[1].getSexo() + ", " + p[2].getNome() + " " +  p[2].getIdade() + " " +  p[2].getSexo() + ", " + p[3].getNome() + " " +  p[0].getIdade() + " " +  p[0].getSexo());

p[1].cancelarMatricula();