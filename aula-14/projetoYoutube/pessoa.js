export class Pessoa {
    constructor(nomes, idades, sexos) {
        this.nomes = nomes;
        this.idades = idades;
        this.sexos = sexos;
        this.nome = nomes;
        this.idade = idades;
        this.sexo = sexos;
        this.experiencia = 0;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getExperiencia() {
        return this.experiencia;
    }
    setExperiencia(expe) {
        this.experiencia = expe;
    }
    ganharExp(exp) {
        this.setExperiencia(this.getExperiencia() + exp);
    }
}
