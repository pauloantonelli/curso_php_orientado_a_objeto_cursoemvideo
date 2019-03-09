<?php
    require_once 'animal.php';
    class Peixe extends Animal{
        private $corEscama;

        public function getCorEscama(){
            return $this->corEscama;
        }
        public function setCorEscama($cor){
            $this->corEscama = $cor;
        }

        public function locomover(){
            echo 'Nadando';
        }
        public function alimentar(){
            echo 'Comendo substancias da agua';
        }
        public function emitirSom(){
            echo 'Peixe nao emite som';
        }
        public function soltarBolhas(){
            echo 'Soltou uma bolha';
        }
    }
?>