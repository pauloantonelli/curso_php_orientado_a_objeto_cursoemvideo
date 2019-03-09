<?php
    require_once 'pessoa.php';
    class Aluno extends Pessoa{
        //ATRIBUTOS
        private $matricula;
        private $curso;
        //METODOS ESPECIAIS
        public function getMatricula(){
            return $this->matricula;
        }
        public function setMatricula($matr){
            $this->matricula = $matr;
        }
        public function getCurso(){
            return $this->curso;
        }
        public function setCurso($curso){
            $this->curso = $curso;
        }
        //METODOS PUBLICOS
        public /*final*/ function pagarMensalidade(){//SE DECLARAR COMO FINAL ESSA FUNCAO SERÁ OBRIGATORIAMENTE HERDADA
            echo "Pagando mensalidade do aluno ". $this->getNome();
        }
    }
?>