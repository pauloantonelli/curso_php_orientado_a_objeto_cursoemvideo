<?php
    require_once 'animal.php';
    class Reptil extends Animal{
        private $corEscama;

        public function getCorEscama(){
            return $this->corEscama;
        }
        public function setCorEscama($cor){
            $this->corEscama = $cor;
        }

        public function locomover(){
            echo 'Rastejando';
        }
        public function alimentar(){
            echo 'Comendo vegetais';
        }
        public function emitirSom(){
            echo 'Som de reptil';
        }
    }
?>