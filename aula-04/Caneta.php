<?php

class Caneta{
    private $modelo;
    private $ponta;
    private $tampada;
    private $cor;

    public function __construct(){//Se por o mesmo nome da classe(nesse caso Caneta) ele ainda continua como construtor
        $this->tampada = true;
        $this->cor = "Azul";
    }

    public function getModelo(){
        return $this->modelo;
    }
    public function setModelo($m){
        $this->modelo = $m;
    }
    public function getPonta(){
        return $this->ponta;
    }
    public function setPonta($p){
        $this->ponta = $p;
    }
}

?>