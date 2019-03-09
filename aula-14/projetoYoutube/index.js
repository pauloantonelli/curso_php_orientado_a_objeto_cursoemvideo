import { Video } from "./video.js";
import { Gafanhoto } from "./gafanhoto.js";
import { Visualizacao } from "./visualizacao.js";
let v = [];
v[0] = new Video("Aula 1 de P.O.O");
v[1] = new Video("Aula 12 de PHP");
v[2] = new Video("Aula 15 de HTML5");
/*console.log(v[0]);
console.log(v[1]);
console.log(v[2]);*/
var p = [];
p[0] = new Gafanhoto('Jubileu', 22, 'M', 'juba');
p[1] = new Gafanhoto('Creusa', 27, 'F', 'creu');
/*console.log(p[0]);
console.log(p[1]);*/
var vis = [];
vis[0] = new Visualizacao(p[0], v[2]);
vis[0].avaliar();
vis[1] = new Visualizacao(p[0], v[1]);
vis[1].avaliarPorc(85);
console.log(vis[0]);
console.log(vis[1]);
