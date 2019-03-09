<?php
class fone{
    var $tecnologia;
    var $material;
    var $botoes;
    var $cor;
    var $entradasP2;

    var $bateria;
    var $conexao;
    var $musica;
    var $musicaPausa;
    var $carregador;
    function bateria(){
        $bateria;
    }
    function carregando(){
        if($this->bateria <= 10){
            echo "<p>Carregando aguarde... 10%</p>";
            $this->bateria = 20;
        }
        if($this->bateria <= 20){
            echo "<p>Carregando... 20%</p>";
            $this->bateria = 30;
        }if($this->bateria <= 30){
            echo "<p>Carregando... 30%</p>";
            $this->bateria = 40;
        }if($this->bateria <= 40){
            echo "<p>Carregando... 40%</p>";
            $this->bateria = 50;
        }if($this->bateria <= 50){
            echo "<p>Carregando... 50%</p>";
            $this->bateria = 60;
        }if($this->bateria <= 60){
            echo "<p>Carregando... 60%</p>";
            $this->bateria = 70;
        }if($this->bateria <= 70){
            echo "<p>Carregando... 70%</p>";
            $this->bateria = 80;
        }if($this->bateria <= 80){
            echo "<p>Carregando... 80%</p>";
            $this->bateria = 90;
        }if($this->bateria <= 90){
            echo "<p>Carregando... 90%</p>";
            $this->bateria = 100;
        }if($this->bateria == 100){
            echo "<p>Bateria em 100%, já pode usar!</p>";
        }
    }
    function carregar(){
        if($this->carregador == true && $this->bateria <= 20){
            $this->carregando();
        }elseif($this->carregador == false && $this->bateria <= 20){
            echo "<p>Conecte o carregador primeiro para carregar!</p>";
        }elseif($this->carregador == true && $this->bateria >= 20) {
            echo "<p>Bateria suficiente, nao precisa carregar!</p>";
        }
    }
    function ligar(){
        if($this->bateria >= 10){
            echo "<p>Ligado</p>";
        }else{
            echo "<p>Carregue a bateria primeiro</p>";
        }
    }
    function desligar(){
        echo "<p>Desligado</p>";
    }

    function conectaCelular(){
        if($this->conexao == false){
            echo "<p>Conectado</p>";
            $this->conexao = true;
        }else{
            echo "<p>Já está conectado</p>";
        }
    }
    function desconectaCelular(){
        if($this->conexao == true){
            echo "<p>Desconectado</p>";
            $this->conexao == false;
        }else{
            echo "<p>Já está desconectado</p>";
        }
    }
    function fazerLigacao(){
        if($this->musicaPausa == false){
            echo "<p>Musica em pausa</p>";
            $this->musicaPausa = true;
            if($this->conexao == true){
                echo "<p>Telefonando...</p>";
            }elseif($this->conexao == false){
                echo "<p>Para ligar primeiro conecte ao telefone!</p>";
            }
        }
    }
    function desligarLigacao(){
        echo "<p>Desligando...</p>";
    }
    function receberMusica(){
        if($this->musica == false){
            echo "<p>Recebendo música</p>";
            $this->musica = true;
        }else{
            echo "<p>Musica já recebida</p>";
        }
    }
    function ouvirMusica(){
        if($this->musica == true){
            echo "<p>Tocando musica...</p>";
            $this->musicaPausa == false;
        }else{
            echo "<p>Arquivo de musica faltando</p>";
        }
    }
    function pararMusica(){
        echo "<p>Musica em pausa</p>";
        $this->musicaPausa == true;
    }
}
?>