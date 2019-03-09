<?php
    abstract class Pessoa{
        //ATRIBUTOS
        protected $nome;
        protected $idade;
        protected $sexo;
        //METODOS ESPECIAIS
        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function getAniver(){
            return $this->idade;
        }
        public function setAniver($idade){
            $this->idade = $idade;
        }
        public function getSexo(){
            return $this->sexo;
        }
        public function setSexo($sexo){
            $this->sexo = $sexo;
        }
        //METODOS PUBLICOS
        public final function fazerAniver(){
            $this->setAniver($this->getAniver() + 1);
        }
    }
?>