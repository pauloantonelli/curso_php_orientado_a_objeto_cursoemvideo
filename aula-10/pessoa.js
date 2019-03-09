export class Pessoa{
    constructor(nome, idade, sexo){
        //ATRIBUTOS
        //super();//USADO PARA INICIALIZAR O THIS. NO CONSTRUTOR, POR QUE TECNICAMENTE ATE QUE O CONSTRUTOR EXECUTE TODO O JS NAO SABE OQUE É O THIS.
        this.nome = nome; this.idade = idade; this.sexo = sexo;

        //METODOS ESPECIAIS
        this.getNome = function(){
            return this.nome;
        }
        this.setNome = function(nome){
            this.nome = nome;
        }
        this.getIdade = function(){
            return this.idade;
        }
        this.setIdade = function(idade){
            this.idade = idade;
        }
        this.getSexo = function(){
            return this.sexo;
        }
        this.setSexo = function(sexo){
            this.sexo = sexo;
        }
    }
    //METODOS PUBLICOS
    verNome(){
        return this.getNome();
    }
    mudarNome(nome){
        this.setNome(nome);
    }
    verIdade(){
        return this.getIdade();
    }
    mudarIdade(idade){
        this.setIdade(idade);
    }
    verSexo(){
        return this.getSexo();
    }
    mudarSexo(sexo){
        this.setSexo(sexo);
    }
    fazerAniver(){
        this.setIdade(this.getIdade() + 1);
    }
}