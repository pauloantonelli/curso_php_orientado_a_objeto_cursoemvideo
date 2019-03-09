<?php
    require_once 'mamifero.php';
    class Canguru extends Mamifero{
        public function locomover(){
            echo 'Pulando';
        }
        public function usarBolsa(){
            echo '';
        }
    }
?>