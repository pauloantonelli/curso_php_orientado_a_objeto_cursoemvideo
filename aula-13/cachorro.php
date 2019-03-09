<?php
    require_once 'lobo.php';
    class Cachorro extends Lobo{
        public function emitirSom(){
            echo 'Au! Au! Auu...!';
        }
        //O PHP E ALGUMAS OUTRAS LINGUAGENS NAO SUPORTAM O POLIMORFISMO DE SOBRECARGA, POR ISSO OS METODOS TEM NOMES DIFERENTES PARA CONTORNAR ISSO E TER ALGO SEMELHATE A ESSE POLIMORFISMO
        public function reagirFrase($frase){
            if($frase == "toma comida" || $frase == "ola"){
                echo 'Abanar e Latir';
            }else{
                echo 'Rosnar';
            }
        }
        public function reagirHora($hora, $min){
            if($hora < 12){
                echo 'Abanar';
            }else if($hora >= 18){
                echo 'Ignorar';
            }else{
                echo "Abanar e Latir";
            }
        }
        public function reagirDono($dono){
            if($dono){
                echo 'Abanar';
            }else{
                echo 'Rosnar e Latir';
            }
        }
        public function reagirIdade($idade, $peso){
            if($idade < 5){
                if($peso < 10){
                    echo 'Abanar';
                }else{
                    echo 'Latir';
                }
            }else{
                if($peso < 10){
                    echo 'Rosnar';
                }else{
                    echo 'Ignorar';
                }
            }
        }
    }
?>