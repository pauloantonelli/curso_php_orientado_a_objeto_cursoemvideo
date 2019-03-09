<?php
    require_once 'pessoa.php';
    class Professor extends Pessoa{
        //ATRIBUTOS
        public $especialidade;
        public $salario;
        //METODOS ESPECIAIS
        public function getEspecialidade(){
            return $this->especialidade;
        }
        public function setEspecialidade($espec){
            $this->especialidade = $espec;
        }
        public function getSalario(){
            return $this->salario;
        }
        public function setSalario($sal){
            $this->salario = $sal;
        }
        //METODOS PUBLICOS
        public function receberAumento($aumento){
            $this->setSalario($this->getSalario() + $aumento);
        }
    }
?>