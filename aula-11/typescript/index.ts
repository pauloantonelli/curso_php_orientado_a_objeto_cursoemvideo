import { Pessoa } from './pessoa.js';
import { Visitante } from './visitante.js';
import { Aluno } from './aluno.js';
import { Professor } from './professor.js';
import { Bolsista } from './bolsista.js';
import { Tecnico } from './tecnico.js';

//var p1 = new Pessoa();//Dá erro por que a classe pessoa é abstrata, e esse tipo de classe só serve para criar subclasses apartir dela.
var v1 = new Visitante();
var a1 = new Aluno();
var b1 = new Bolsista();

v1.setNome("Juvenal");
v1.setAniver(33);
v1.setSexo("M");
console.log(v1);

a1.setNome("Pedro");
a1.setMatricula(111);
a1.setSexo("M");
a1.setCurso("Informática");
console.log(a1);

b1.setMatricula(1112);
b1.setNome("Juliana");
b1.setBolsa(12.5);
b1.setCurso("Administração");
b1.setAniver(18);
b1.pagarMensalidade();
console.log(b1);