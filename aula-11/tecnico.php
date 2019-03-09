<?php
    require_once 'aluno.php';
    class Tecnico extends Aluno{
        //ATRIBUTOS
        public $registroProfissional;
        //METODOS ESPECIAIS
        public function getReg(){
            return $this->registroProfissional;
        }
        public function setReg($reg){
            $this->registroProfissional = $reg;
        }
        //METODOS PUBLICOS
        public function praticar(){
            echo "Aluno ".$this->nome." praticando";
        }
    }
?>