<?php
    require_once 'animal.php';
    class Mamifero extends Animal{
        private $corPelo;

        public function getCorPelo(){
            return $this->corPelo;
        }
        public function setCorPelo($pelo){
            $this->setCorPelo = $pelo;
        }

        public function locomover(){
            echo 'Correndo';
        }
        public function alimentar(){
            echo 'Mamando';
        }
        public function emitirSom(){
            echo 'Som de mamifero';
        }
    }
?>