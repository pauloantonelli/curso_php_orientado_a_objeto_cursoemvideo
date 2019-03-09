<?php
    require_once 'animal.php';
    class Ave extends Animal{
        private $corPena;

        public function getCorPena(){
            return $this->corPena;
        }
        public function setCorPena($cor){
            $this->corPena = $cor;
        }

        public function locomover(){
            echo 'Voando';
        }
        public function alimentar(){
            echo 'Comendo frutas';
        }
        public function emitirSom(){
            echo 'Som de ave';
        }
        public function fazerNinho(){
            echo 'Construiu um ninho';
        }
    }
?>