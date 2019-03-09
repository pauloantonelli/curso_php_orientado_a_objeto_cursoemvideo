<?php
    require_once 'animal.php';
    class Mamifero extends Animal{
        protected $corPelo;

        public function getCorPelo(){
            return $this->corPelo;
        }
        public function setCorPelo($cor){
            $this->corPelo = $cor;
        }
        public function emitirSom(){
            echo 'Som de Mamifero';
        }
    }
?>