export class Pessoa {
    constructor() {
    }
    //METODOS ESPECIAIS
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getAniver() {
        return this.idade;
    }
    setAniver(idade) {
        this.idade = idade;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    //METODOS PUBLICOS
    fazerAniver() {
        this.setAniver(this.getAniver() + 1);
    }
}
