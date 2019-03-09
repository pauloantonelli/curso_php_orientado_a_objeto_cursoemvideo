<?php
class alunosenac{
    var $nome;
    var $idade;
    var $curso;
    var $aulasSemanais;
    var $horaChegada;
    var $horaSaida;
    var $professor;
    var $numeroSala;
    var $enderecoSenac;
    var $colegasSala;

    function aluno(){
        $this->nome = "insira o nome do aluno";
        $this->idade = "insira o idade do aluno";
        $this->curso = "insira o curso do aluno";
    }
    function desmarcarAula(){
        $this->dia = "Aula desmarcada!";
        $this->aulasSemanais;
        $this->enderecoSenac;
    }
    function remarcarAula(){
        $this->dia;
        $this->aulasSemanais;
        $this->enderecoSenac;
        $this->horaChegada;
        $this->horaSaida;
    }
    function trocarSala(){
        $this->numeroSala;
        $this->colegasSala;
    }
    function trocarProfessor(){
        $this->professor;
    }
    function adiantarComecoAula(){
        $this->horaChegada;
    }
    function atrasarComecoAula(){
        $this->horaChegada;
    }
    function adiantarFimAula(){
        $this->horaSaida;
    }
    function atrasarFimAula(){
        $this->horaSaida;
    }
}
?>